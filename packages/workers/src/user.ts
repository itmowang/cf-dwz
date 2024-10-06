import { jwt, sign } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import { Hono } from 'hono/dist/types/hono';
import { Context } from 'hono/dist/types/context';
import Prisma from '../prisma/prisma'
import md5 from 'crypto-js/md5';


export default (app: Hono, path: string) => {
    // 用户注册
    app.post(`${path}/register`, async (c: Context) => {
        try {
            const prisma = Prisma(c)
            const { email, password } = await c.req.json()
            const res = await prisma.user.create({
                data: {
                    email,
                    password: md5(password).toString()
                }
            });
            return c.json({
                status: 200,
                data: res,
                message: 'register success',
            })
        } catch (error) {
            return c.json({
                status: 500,
                message: 'register failed',
                error
            })
        }

    })

    // 用户登录
    app.post(`${path}/login`, async (c: any) => {
        try {
            const prisma = Prisma(c)
            const { email, password } = await c.req.json()

            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
             

            if (!user) {
                return c.json({
                    status: 500,
                    message: '找不到邮箱或者密码!',
                })
            } else {
                if (user.password === md5(password).toString()) {
                    const token = await sign({
                        email,
                        id: user.id
                    }, 'mowang')
                    return c.json({
                        status: 200,
                        data: {
                            userInfo: { ...user, password: null } , token
                        },
                        message: 'login success',
                    })
                } else {
                    return c.json({
                        status: 500,
                        message: 'password error',
                    })
                }
            }

        } catch (error) {

            return c.json({
                status: 500,
                message: 'login failed',
                error
            })

        }
    })

}