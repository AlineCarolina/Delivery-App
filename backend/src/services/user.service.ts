import UserInterface from "../interfaces/UserInterface";
import { User } from "../models/user.model";
import { statusCodes, messageErrors } from "../statusCodes";

export default class UserService {
    public static async register({ name , email, password, role }: UserInterface) {
        const user = await User.create({ name, email, password, role });
        return { response: { user }, code: statusCodes.CREATED };
    }

    public static async login({ email, password }: UserInterface) {
        const userData = await User.findOne({ where: { email, password } });
        if(!userData) return { response: { message: messageErrors.NOT_FOUND }, code: statusCodes.NOT_FOUND };
        return { response: { userData }, code: statusCodes.OK };
    }
}