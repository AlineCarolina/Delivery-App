import { Router } from "express";
import SaleController from "../controllers/sale.controller";

const route = Router();

route.get('/sale', SaleController.getAll);
route.post('/sale', SaleController.postSale);


export default route;