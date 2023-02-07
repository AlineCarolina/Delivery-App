import express, { Request, Response } from "express";
import statusCodes from "./statusCodes";
import UserController from "./controllers/user.controller";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(statusCodes.OK).send('Express + TypeScript');
    });
    this.app.post('/login', UserController.login);
  }
}

export { App };