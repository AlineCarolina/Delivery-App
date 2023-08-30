import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import TokenValidation from '../helpers/tokenValidation';

const route = Router();

route.get('/products', ProductController.getAll, TokenValidation.verify);
route.post('/products', ProductController.postProduct, TokenValidation.verify);


export default route;