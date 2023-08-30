import { Router } from 'express';
import UserController from '../controllers/user.controller';
import TokenValidation from '../helpers/tokenValidation';

const route = Router();

route.post('/register', UserController.register);
route.post('/login', UserController.login);
route.get('/users', UserController.getAll, TokenValidation.verify);
route.delete('/user/:id', UserController.deleteUser, TokenValidation.verify);

export default route;