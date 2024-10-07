import { Hono } from 'hono/dist/types/hono';
import { Context } from 'hono/dist/types/context';
import Prisma from '../prisma/prisma'


export default (app: Hono, path: string) => {
    // 仪表盘信息
    app.get(`${path}/dashboard`, async (c: Context) => {
        const payload = c.get("jwtPayload") as JwtPayLoad;
        const prisma = Prisma(c)
        
        // 我生成的短网址数量
        const my_dwz_count = await prisma.link.count({
            where: {
                userId: payload?.id
            }
        })

            return c.json({
                status: 200,
                data: {
                    //我生成的短网址数量
                    my_dwz_count: my_dwz_count
                },

            })

    })
}