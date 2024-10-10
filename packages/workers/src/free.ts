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



    // 创建短网址，向前端返回短网址，不记录用户信息
    app.post(`${path}/dwz_free_create`, async (c: Context) => {
        const prisma = Prisma(c);
        const { originalUrl } = await c.req.json(); // 从请求体获取原始网址

        // 生成短网址
        const short = shortLink(originalUrl);
        console.log(short);
        const findShort = await prisma.link.findUnique({
            where: {
                shortUrl: short,
            },
        })
        if (findShort) {
            return c.json({
                status: 200,
                message: "短网址已存在",
                data: {
                    shortUrl: findShort.shortUrl,
                },
            });
        } else {
            const params = {
                originalUrl,
                shortUrl: short,
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

}