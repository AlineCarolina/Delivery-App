import SaleInterface from "../interfaces/SaleInterface";
import { Sale } from "../models/sale.model";
import { statusCodes } from "../statusCodes";

export default class SaleService {
    public static async getAll() {
        const data = await Sale.findAll();

        return { response: data, code: statusCodes.OK }
    }

    public static async postSale({ user_id, seller_id, total_price, delivery_address, delivery_number, status }: SaleInterface) {
        const data = await Sale.create({ user_id, seller_id, total_price, delivery_address, delivery_number, status });
        
        return { response: data, code: statusCodes.CREATED }
    }
}
