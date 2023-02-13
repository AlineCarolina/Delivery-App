import ProductInterface from "../interfaces/ProductInterface";
import { Product } from "../models/product.model";
import { statusCodes } from "../statusCodes";

export default class ProductService {
    public static async getAll() {
        const data = await Product.findAll();

        return { response: data, code: statusCodes.OK }
    }

    public static async postProduct({ name, price }: ProductInterface) {
        const data = await Product.create({ name, price });
        
        return { response: data, code: statusCodes.CREATED }
    }
}
