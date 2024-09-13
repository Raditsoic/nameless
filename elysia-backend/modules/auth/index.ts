import { Elysia, t } from "elysia";
import { prisma } from "~libs/prisma";
import { comparePassowrd, hashPassword, md5hash } from '~utils/bcrypt'
import { isAuthenticated } from '~middlewares/auth'
import { Credentials } from "../../src/models/models";

export const auth = (app: Elysia) => {
    app.group("/auth", (app) => {
        app.post('/sign-up', async ({ body, set }) => {
            const creds = body as typeof Credentials;

            // Duplicate email check
            const emailExist = await prisma.user.findFirst({
                where: {
                    email: creds.email
                },
                select: {
                    id: true
                }
            });
            if (emailExist) {
                set.status = 400;
                return {
                    success: false,
                    data: null,
                    message: "Email already exist!.",
                };
            }

            // Duplicate username check
            const usernameExist = await prisma.user.findFirst({
                where: {
                    username: creds.username
                },
                select: {
                    id: true
                }
            });
            if (usernameExist) {
                set.status = 400;
                return {
                    success: false,
                    data: null,
                    message: "Username already been taken!.",
                };
            }

            // handle password
            const { hash, salt } = await hashPassword(creds.password);
            const emailHash = md5hash(creds.email);

            const newUser = await prisma.user.create({
                data: {
                    username: creds.username,
                    email: creds.email,
                    password: hash,
                    salt: salt,
                    emailHash: emailHash
                },
            })

            return {
                success: true,
                message: "User registered successfully.",
                data: {
                    user: newUser
                }
            }
        });
    })
}
