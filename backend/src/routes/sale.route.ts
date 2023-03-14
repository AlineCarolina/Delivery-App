import { Router } from "express";
import SaleController from "../controllers/sale.controller";

const route = Router();

route.get('/sale', SaleController.getAll);
route.get('/sale/:id', SaleController.getById);
route.get('/sale/seller/:id', SaleController.getBySellerId);
route.get('/sale/customer/:id', SaleController.getByCustomerId);
route.post('/sale', SaleController.postSale);


export default route;