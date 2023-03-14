import { Product } from '../database/models/product.model';
import { Sale } from '../database/models/sale.model';
import { SaleProduct } from '../database/models/saleProducts.model';
import { User } from '../database/models/user.model';
import SaleInterface from '../interfaces/SaleInterface';
import { statusCodes } from '../utils/statusCodes';

export default class SaleService {
    public static async getAll() {
        const data = await Sale.findAll();

        return { response: data, code: statusCodes.OK }
    }

    public static async getById(id: number) {
        const data = await Sale.findOne({
            where: { id },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['email', 'password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
        });

        return { response: data, code: statusCodes.OK }
    }

    public static async getBySellerId(id: number) {
        const data = await Sale.findAll({
            where: { seller_id: id }
        });

        return { response: data, code: statusCodes.OK }
    }

    public static async getByCustomerId(id: number) {
        const data = await Sale.findAll({
            where: { user_id: id }
        });

        return { response: data, code: statusCodes.OK }
    }

    public static async postSale(body: SaleInterface) {
        const { products, saleInfo } = body;
        
        const { id } = await Sale.create(saleInfo);
      
        const orders = await Promise.all(products.map(({ id: product_id, quantity }: any) => (
          SaleProduct.create({ sale_id: id, product_id, quantity })
        )));

        return { response: id, orders, code: statusCodes.CREATED };
    }
}
