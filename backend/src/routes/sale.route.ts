import { Router } from "express";
import SaleController from "../controllers/sale.controller";
import TokenValidation from "../helpers/tokenValidation";

const route = Router();

route.get('/sale', SaleController.getAll, TokenValidation.verify);
route.get('/sale/:id', SaleController.getById, TokenValidation.verify);
route.get('/sale/seller/:id', SaleController.getBySellerId, TokenValidation.verify);
route.get('/sale/customer/:id', SaleController.getByCustomerId, TokenValidation.verify);
route.post('/sale', SaleController.postSale, TokenValidation.verify);
route.put('/sale/:id', SaleController.updateSale, TokenValidation.verify)


export default route;