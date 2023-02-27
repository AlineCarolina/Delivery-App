import { readFile } from "fs/promises";
import { sign, verify } from "jsonwebtoken";


export default class JWT {
    public static async create(jwtUser: any) {
        const jwtSecret = await readFile('./jwt.evaluation.key', 'utf-8');
        return sign(jwtUser, jwtSecret, { expiresIn: '30d', algorithm: 'HS256' });
    }

    public static async validate(token: any) {
        try {
            const jwtSecret = await readFile('./jwt.evaluation.key', 'utf-8');
            return verify(token, jwtSecret);
        } catch (_) {
            return null;
        }
    }
}