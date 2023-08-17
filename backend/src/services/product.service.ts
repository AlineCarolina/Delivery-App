import ProductInterface from '../interfaces/ProductInterface';
import { Product } from '../database/models/product.model';
import { messageErrors, statusCodes } from '../utils/statusCodes';

export default class ProductService {
    public static async getAll() {
        const data = await Product.findAll();

        if(!data) return { response: { message: messageErrors.NOT_FOUND }, code: statusCodes.BAD_REQUEST }

        return { response: data, code: statusCodes.OK }
    }

    public static async postProduct({ name, price, url_image }: ProductInterface) {
        if(!name || !price || !url_image) return { response: { message: messageErrors.FIELDS_INV }, code: statusCodes.BAD_REQUEST }

        const data = await Product.create({ name, price, url_image });

        if(!data) return { response: { message: messageErrors.NOT_FOUND }, code: statusCodes.NOT_FOUND }
        
        return { response: data, code: statusCodes.CREATED }
    }
}
