import { Request, Response } from "express";
import SaleService from "../services/sale.service";

export default class SaleController {
    public static async getAll(req: Request, res: Response) {
        const { role } = req.query;
        const { user_id } = req.body;

        const { response, code } = await SaleService.getAll({ role, user_id });

        return res.status(code).json(response);
    }

    public static async postSale(req: Request, res: Response) {
        const { body } = req;
        
        const { response, code } = await SaleService.postSale(body);

        return res.status(code).json(response);
    }
}
