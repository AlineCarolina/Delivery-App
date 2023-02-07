import UserInterface from "../interfaces/UserInterface";
import { User } from "../models/user.model";

export default class UserService {
    public static async login({ name , email, password, role }: UserInterface) {
        const response = await User.create({ name, email, password, role });

    return response;
    }
}