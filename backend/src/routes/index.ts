import { Router } from 'express';
import userRouter from './user.route';

const route = Router();

route.use(userRouter);

export default route;