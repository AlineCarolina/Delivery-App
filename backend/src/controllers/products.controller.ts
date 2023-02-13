import { Request, Response } from "express";
import ProductService from "../services/product.service";

export default class ProductController {
    public static async getAll(_req: Request, res: Response) {
        const { response, code } = await ProductService.getAll();

        return res.status(code).json(response);
    }

    public static async postProduct(req: Request, res: Response) {
        const { name, price } = req.body

        const { response, code } = await ProductService.postProduct({ name, price });
        
        return res.status(code).json(response);
    }
}
