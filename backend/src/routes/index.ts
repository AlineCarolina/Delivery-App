import { Router } from 'express';
import userRouter from './user.route';
import productRouter from './product.route';
import saleRouter from './sale.route';

const route = Router();

route.use(userRouter);
route.use(productRouter);
route.use(saleRouter);

export default route;