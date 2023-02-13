import { Request, Response } from "express";
import SaleService from "../services/sale.service";

export default class SaleController {
    public static async getAll(_req: Request, res: Response) {
        const { response, code } = await SaleService.getAll();

        return res.status(code).json(response);
    }

    public static async postSale(req: Request, res: Response) {
        const { user_id, seller_id, total_price, delivery_address, delivery_number, status } = req.body;
        
        const { response, code } = await SaleService.postSale({ user_id, seller_id, total_price, delivery_address, delivery_number, status });

        return res.status(code).json(response);
    }
}
