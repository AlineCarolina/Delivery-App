import { Router } from "express";
import userRouter from "./user.route";
import productRouter from "./product.route";

const route = Router();

route.use(userRouter);
route.use(productRouter);

export default route;