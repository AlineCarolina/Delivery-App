import { Router } from "express";
import SaleController from "../controllers/saleController";

const route = Router();

route.get('/sale', SaleController.getAll);
route.post('/sale', SaleController.postSale);


export default route;