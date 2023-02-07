import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController {
    public static async login(req: Request, res: Response) {
        const user = await UserService.login( { ...req.body } );
    return res
        .status(200)
        .json({ message: "user created", data: user })
    }
}
