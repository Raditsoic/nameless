import { Elysia, t } from 'elysia';

export const Credentials = t.Object({
    username: t.String(),
    password: t.String()
})