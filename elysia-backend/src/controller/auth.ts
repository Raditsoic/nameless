import { Elysia } from 'elysia';
import { Credentials } from '../models/models'

export const loginController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User Signed In', body: body };
};

export const logoutController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User Signed In', body: body };
};

export const registerController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User Signed In', body: body };
};

export const resetPasswordController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User Signed In', body: body };
};