import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const route = Router();

route.get('/products', ProductController.getAll);
route.post('/products', ProductController.postProduct);


export default route;