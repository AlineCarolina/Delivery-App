import UserInterface from '../interfaces/UserInterface';
import { User } from '../database/models/user.model';
import { statusCodes, messageErrors } from '../utils/statusCodes';
import md5 from 'md5';
import JWT from '../helpers/JWTToken';
import { Op } from 'sequelize';

export default class UserService {
    public static async register({ username, email, password, role }: UserInterface){
        if (!role || role.trim() === "") {
            role = "customer";
        }

        const data = await User.findOne({ where: { email, username } });
        if(data) return { response: { message: messageErrors.USER_REGISTER }, code: statusCodes.CONFLICT };

        if(!username || username.length < 3) return { response: { message: messageErrors.FIELDS_INV }, code: statusCodes.BAD_REQUEST };

        if(!email) return { response: { message: messageErrors.EMAIL_IS_NOT }, code: statusCodes.BAD_REQUEST };

        const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const emailPass = emailFormat.test(email);
        if(!emailPass) return { response: { message: messageErrors.EMAIL_VALID}, code: statusCodes.BAD_REQUEST };

        if(!password) return { response: { message: messageErrors.PASSWORD_IS_NOT }, code: statusCodes.BAD_REQUEST };

        if(password.length < 6) return { response: { message: messageErrors.PASSWORD_LENGTH }, code: statusCodes.BAD_REQUEST };

        const newcreate = await User.create({ username, email, password: md5(password), role });
        
        const { password:pass, ...newUser } = newcreate.get();
        const token = await JWT.create(newUser);
        return { response: { newUser, token }, code: statusCodes.CREATED };
    }

    public static async login({ email, password }: UserInterface) {
        if(!email) return { response: { message: messageErrors.EMAIL_REQUIRED }, code: statusCodes.BAD_REQUEST };

        if(!password) return { response: { message: messageErrors.PASSWORD_IS_REQUIRED }, code: statusCodes.BAD_REQUEST }

        const userData = await User.findOne({ where: { email, password: md5(password) } });
        if(!userData) return { response: { message: messageErrors.NOT_FOUND }, code: statusCodes.NOT_FOUND };

        const { password: pass, ...newUser } = userData.get();
        const token = await JWT.create(newUser);
        return { response: { newUser, token }, code: statusCodes.OK };
    }

    public static async getAll() {
        const data = await User.findAll({ 
            where: {
                role: {
                    [Op.ne]: "administrator"
                }
            },
            attributes: { exclude: ["password"] },
        });

        if(!data) return { response: { message: messageErrors.FIELDS_INV }, code: statusCodes.BAD_REQUEST }

        return { response: data, code: statusCodes.OK }
    }

    public static async deleteUser(id: number) {
        const userDeleted = await User.destroy({ where: { id } });

        if(!userDeleted) return { response: { message: messageErrors.FIELDS_INV }, code: statusCodes.BAD_REQUEST }

        return { response: 'user deleted', code: statusCodes.OK }
    }
}