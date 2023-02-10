import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const route = Router();

route.post('/products', ProductController.getAll);


export default route;