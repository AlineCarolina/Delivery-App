import { Router } from 'express';
import UserController from '../controllers/user.controller';

const route = Router();

route.post('/register', UserController.register);
route.post('/login', UserController.login);


export default route;