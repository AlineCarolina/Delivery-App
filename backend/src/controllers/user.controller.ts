import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController {
    public static async register(req: Request, res: Response) {
        const { email, password, name, role = 'customer' } = req.body;
        const { response, code } = await UserService.register({ email, password, name, role });
        return res.status(code).json(response);
    }

    public static async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const { response, code } = await UserService.login({ email, password });
        return res.status(code).json(response);
    }

    public static async getAll(req: Request, res: Response) {
        const { role } = req.query;

        const { response, code } = await UserService.getAll(role);

        return res.status(code).json(response);
        
    }

    public static async deleteUser(req: Request, res: Response) {
        const { id } = req.params;

        const { response, code } = await UserService.deleteUser(+id);

        return res.status(code).json(response);
    }
}
