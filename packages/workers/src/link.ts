import { jwt, sign } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
// import { bearerAuth } from "hono/bearer-auth";
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
  // 当前用户获取短网址列表
  app.get(`${path}/dwz_list`, async (c: Context) => {
    const payload = c.get("jwtPayload") as JwtPayLoad;
    const prisma = Prisma(c);
    const list = await prisma.link.findMany({
      where: {
        userId: payload.id,
      },
    });
    return c.json({
      status: 200,
      data: list,
    });
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

    // 记录访问信息
    console.log(c.req.header());

    // const ip = c.req.headers.get('cf-connecting-ip') || c.req.headers.get('x-forwarded-for'); // 获取访问者的 IP
    // const country = c.req.headers.get('cf-ipcountry'); // 获取访问者的国家信息

    // await prisma.visit.create({
    //   data: {
    //     linkId: link.id,
    //     ipAddress: ip,
    //     country: country,
    //   },
    // });

    // 返回原网址的 JSON 数据
    return c.json({
      status: 200,
      originalUrl: link.originalUrl,
    });
  });
};
