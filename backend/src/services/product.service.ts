import ProductInterface from '../interfaces/ProductInterface';
import { Product } from '../database/models/product.model';
import { statusCodes } from '../utils/statusCodes';

export default class ProductService {
    public static async getAll() {
        const data = await Product.findAll();

        return { response: data, code: statusCodes.OK }
    }

    public static async postProduct({ name, price, url_image }: ProductInterface) {
        const data = await Product.create({ name, price, url_image });
        
        return { response: data, code: statusCodes.CREATED }
    }
}
