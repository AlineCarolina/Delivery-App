import UserInterface from "../interfaces/UserInterface";
import { User } from "../models/user";

const loginSer = async ({ name , email, password, role }: UserInterface) => {
    const response = await User.create({ name, email, password, role });

    return response;
};

export default loginSer;