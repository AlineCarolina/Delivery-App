/* import SaleInterface from "../interfaces/SaleInterface"; */
import { Sale } from "../database/models/sale.model";
import { statusCodes } from "../utils/statusCodes";

export default class SaleService {
    public static async getAll({ role, user_id }: any) {
        const query = { where: role === 'customer' ? { user_id: user_id } : { seller_id: user_id }}

        const data = await Sale.findAll(role ? query : {});

        return { response: data, code: statusCodes.OK }
    }

    public static async postSale(body: any) {
        const { products, saleInfo } = body;
        const sale = await Sale.create(saleInfo);
        const { id } = sale.get();


        return { response: id, code: statusCodes.CREATED };
    }
}
