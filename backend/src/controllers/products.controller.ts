import { Request, Response } from "express";
import ProductService from "../services/product.service";

export default class ProductController {
    public static async getAll(_req: Request, res: Response) {
        const { response, code } = await ProductService.getAll();
        return res.status(code).json(response);
    }
}
