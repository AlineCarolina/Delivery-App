import { NextFunction, Request, Response } from 'express';
import { messageErrors, statusCodes } from '../utils/statusCodes';
import JWT from './JWTToken';

export default class TokenValidation {
    public static async verify(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if(!authorization) {
            return res.status(statusCodes.NOT_FOUND).json({ message: messageErrors.TOKEN_NOT_FOUND});
        }
        
        try {
            await JWT.validate(authorization);
            next();
        } catch(_) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: messageErrors.TOKEN_INVALID })
        }
    }
}