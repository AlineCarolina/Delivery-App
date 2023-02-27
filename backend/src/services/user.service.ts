import UserInterface from "../interfaces/UserInterface";
import { User } from "../database/models/user.model"
import { statusCodes, messageErrors } from "../utils/statusCodes";
import md5 from "md5";
import JWT from "../helpers/JWTToken";

export default class UserService {
    public static async register({ username , email, password, role }: UserInterface) {
        const data = await User.findOne({ where: { email, username } });

        if(data) return { response: { message: messageErrors.USER_REGISTER }, code: statusCodes.CONFLICT };

        const newcreate = await User.create({ username, email, password: md5(password), role });
        
        const { password: pass, ...newUser } = newcreate.get();
        
        const token = await JWT.create(newUser);
        
        return { response: { newUser, token }, code: statusCodes.CREATED };
    }

    public static async login({ email, password }: UserInterface) {
        const userData = await User.findOne({ where: { email, password: md5(password) } });

        if(!userData) return { response: { message: messageErrors.NOT_FOUND }, code: statusCodes.NOT_FOUND };

        const { password: pass, ...newUser } = userData.get();
        
        const token = await JWT.create(newUser);

        return { response: { newUser, token }, code: statusCodes.OK };
    }

    public static async getAll(role: any) {
        const data = await User.findAll({ where: role ? { role } : {} });

        const dataWithoutPwd = data.map((user) => {
            const { password: pass, ...dataUser } = user.get();
            return dataUser
        })

        return { response: dataWithoutPwd, code: statusCodes.OK }
    }

    public static async deleteUser(id: number) {
        await User.destroy({ where: { id } });

        return { response: 'user deleted', code: statusCodes.OK }
    }
}