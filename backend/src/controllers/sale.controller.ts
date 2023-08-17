import { Request, Response } from 'express';
import SaleService from '../services/sale.service';

export default class SaleController {
    public static async getAll(req: Request, res: Response): Promise<Response> {
        const { response, code } = await SaleService.getAll();

        return res.status(code).json(response);
    }

    public static async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { response, code } = await SaleService.getById(+id);

        return res.status(code).json(response);
    }

    public static async getBySellerId(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { response, code } = await SaleService.getBySellerId(+id);

        return res.status(code).json(response);
    }

    public static async getByCustomerId(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { response, code } = await SaleService.getByCustomerId(+id);

        return res.status(code).json(response);
    }

    public static async postSale(req: Request, res: Response): Promise<Response> {
        
        const { response, code } = await SaleService.postSale(req.body);

        return res.status(code).json(response);
    }
}
