import { readFile } from "fs/promises";
import { sign } from "jsonwebtoken";


export default class JWT {
    public static async create(jwtUser: any) {
        const jwtSecret = await readFile('./jwt.evaluation.key', 'utf-8');
        return sign(jwtUser, jwtSecret, { expiresIn: '30d', algorithm: 'HS256' });
    }
}