import { Elysia } from 'elysia';
import { Credentials } from '../models/models'

export const loginController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User signed in', body: body };
};

export const logoutController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User logout sucess', body: body };
};

export const registerController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'User registered success', body: body };
};

export const resetPasswordController = ({ body }: { body: typeof Credentials }) => {
    console.log(Credentials);
    return { message: 'Password reset success', body: body };
};