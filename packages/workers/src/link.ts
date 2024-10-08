import { Hono } from "hono/dist/types/hono";
import { Context } from "hono/dist/types/context";
import Prisma from "../prisma/prisma";
import md5 from "crypto-js/md5";

const shortLink = (url: string) => {
  const key = "mowang";
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 对传入网址进行 MD5 加密
  const md5Hash = md5(key + url).toString();
  let outChars = "";

  for (let i = 0; i < 6; i++) {
    const tempSubstring = md5Hash.substring(i * 8, i * 8 + 8);
    let hexLong = parseInt(tempSubstring, 16) & 0x3fffffff;

    const index = hexLong & 0x0000003d;
    outChars += chars[index];
    hexLong = hexLong >> 5;
  }

  return outChars;
};

export default (app: Hono, path: string) => {
  // 当前用户获取短网址列表 并且列表内查询出 当天访问次数 和本周访问次数
  app.get(`${path}/dwz_list`, async (c: Context) => {
    const payload = c.get("jwtPayload") as JwtPayLoad;
    const prisma = Prisma(c);
  
    // 获取当前时间
    const now = new Date();
    
    // 获取当天的开始和结束时间
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(endOfToday.getDate() + 1);
  
    // 获取本周的开始和结束时间
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7);
  
    // 查询短网址及其访问统计
    const list = await prisma.link.findMany({
      where: {
        userId: payload.id,
      },
      include: {
        visits: {
          where: {
            createdAt: {
              gte: startOfToday, // 当天访问
            },
          },
        },
      },
    });
  
    // 处理访问统计
    const result = list.map(link => {
      const todayVisits = link.visits.length;
  
      // 计算本周访问次数
      const weeklyVisits = link.visits.filter(visit => 
        visit.createdAt >= startOfWeek && visit.createdAt < endOfWeek
      ).length;
  
      return {
        id: link.id,
        originalUrl: link.originalUrl,
        shortUrl: link.shortUrl,
        createdAt: link.createdAt,
        todayVisits: todayVisits || 0 ,
        weeklyVisits:weeklyVisits||0,
      };
    });
  
    return c.json({
      status: 200,
      data: result,
    });
  });
  
  // app.get(`${path}/dwz_list`, async (c: Context) => {
  //   const payload = c.get("jwtPayload") as JwtPayLoad;
  //   const prisma = Prisma(c);
  //   const list = await prisma.link.findMany({
  //     where: {
  //       userId: payload.id,
  //     },
  //   });
  //   return c.json({
  //     status: 200,
  //     data: list,
  //   });
  // });
  
  // 创建短网址，向前端返回短网址，不记录用户信息
  app.post(`${path}/dwz_free_create`, async (c: Context) => {
    const prisma = Prisma(c);
    const { originalUrl } = await c.req.json(); // 从请求体获取原始网址

    // 生成短网址
    const short = shortLink(originalUrl);

    //对比短网址是否已存在
    const exist = await prisma.link.findUnique({
      where: {
        shortUrl: short,
      },
    });

    if (exist) {
      return c.json({
        status: 400,
        message: "该短网址已存在,您无法重复创建!详情咨询下管理员",
      });
    } else {
      const params = {
        originalUrl,
        shortUrl: short,
        userId: "000000",
      };

      const link = await prisma.link.create({
        data: params,
      });

      if (link) {
        return c.json({
          status: 200,
          message: "短网址创建成功",
          data: {
            shortUrl: link.shortUrl,
          },
        });
      } else {
        return c.json({
          status: 500,
          message: "短网址创建失败",
        });
      }
    }
  });

  // 创建短网址，向前端返回短网址，并记录用户信息
  app.post(`${path}/dwz_create`, async (c: Context) => {
    const payload = c.get("jwtPayload") as JwtPayLoad;
    const prisma = Prisma(c);
    const { originalUrl } = await c.req.json(); // 从请求体获取原始网址

    // 生成短网址
    const short = shortLink(originalUrl);

    //对比短网址是否已存在
    const exist = await prisma.link.findUnique({
      where: {
        shortUrl: short,
      },
    });

    if (exist) {
      return c.json({
        status: 400,
        message: "该短网址已存在,您无法重复创建!详情咨询下管理员",
      });
    } else {
      const params = {
        originalUrl,
        shortUrl: short,
        userId: payload.id,
      };

      const link = await prisma.link.create({
        data: params,
      });

      if (link) {
        return c.json({
          status: 200,
          message: "短网址创建成功",
          data: {
            shortUrl: link.shortUrl,
          },
        });
      } else {
        return c.json({
          status: 500,
          message: "短网址创建失败",
        });
      }
    }
  });

  // 使用 shortUrl 获取到原网址，并记录访问信息
  app.get(`${path}/dwz/:short`, async (c: Context) => {
    const prisma = Prisma(c);
    const short = c.req.param("short");

    try {
      // 查找短网址对应的原网址
      const link = await prisma.link.findUnique({
        where: {
          shortUrl: short,
        },
      });

      if (!link) {
        return c.json({
          status: 404,
          message: "短网址不存在",
        });
      }

      const cfReq = c.req.raw as any;
      const { cf } = cfReq;

      // 记录访问信息
      try {
        await prisma.visit.create({
          data: {
            linkId: link.id,
            ipAddress: "未知",
            country: cf?.country || "未知",
          },
        });
      } catch (error) {
        console.error("记录访问信息失败:", error);
      }

      // 返回原网址的 JSON 数据
      return c.json({
        status: 200,
        originalUrl: link.originalUrl,
      });
    } catch (e) {
      console.log(e);
    }
  });

  // 短网址访问信息查询 带分页
  // 短网址访问信息查询 带分页
app.get(`${path}/dwz_visits/page`, async (c: Context) => {
  const page =  1; // 获取页码，默认为1
  const limit =  10; // 获取每页数量，默认为10

  const prisma = Prisma(c);

  const totalVisits = await prisma.visit.count();

  // 查询访问信息，并包含外键 Link 表的数据
  const visits = await prisma.visit.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' }, // 按照访问时间降序排列
    include: {
      link: { // 包含 Link 表的数据
        select: {
          id: true,
          originalUrl: true,
          shortUrl: true,
        },
      },
    },
  });

  return c.json({
    status: 200,
    data: {
      visits,
      currentPage: page,
      totalPages: Math.ceil(totalVisits / limit), // 计算总页数
    },
  });
});

  // app.get(`${path}/dwz_visits/page`, async (c: Context) => {
  //   const page = 1; // 获取页码，默认为1
  //   const limit =  10; // 获取每页数量，默认为10
  
  //   const prisma = Prisma(c);
  
  //   const totalVisits = await prisma.visit.count();
  
  //   // 查询访问信息
  //   const visits = await prisma.visit.findMany({
  //     skip: (page - 1) * limit,
  //     take: limit,
  //     orderBy: { createdAt: 'desc' }, // 按照访问时间降序排列
  //   });
  
  //   return c.json({
  //     status: 200,
  //     data: {
  //       visits,
  //       currentPage: page,
  //       totalPages: Math.ceil(totalVisits / limit), // 计算总页数
  //     },
  //   });
  // });
  
};
