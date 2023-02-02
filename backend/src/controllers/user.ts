import { Request, Response, RequestHandler } from "express";
import loginSer from "../services/user";
import { User } from "../models/user";

const login: RequestHandler = async (req: Request, res: Response) => {
    /* const ( name, email, password, role ) =  { ...req.body }; */

    const user = await User.create( { ...req.body } );
    return res
        .status(200)
        .json({ message: "user created", data: user })
};

export default login;

