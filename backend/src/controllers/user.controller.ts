import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
    public static async register(req: Request, res: Response): Promise<Response> {
        const { response, code } = await UserService.register(req.body);

        return res.status(code).json(response);
    }

    public static async login(req: Request, res: Response): Promise<Response> {
        const { response, code } = await UserService.login(req.body);

        return res.status(code).json(response);
    }

    public static async getAll(req: Request, res: Response): Promise<Response> {
        const { response, code } = await UserService.getAll();

        return res.status(code).json(response);
        
    }

    public static async deleteUser(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { response, code } = await UserService.deleteUser(+id);

        return res.status(code).json(response);
    }
}