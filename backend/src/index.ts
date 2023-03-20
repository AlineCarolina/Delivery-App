import express, { Request, Response } from 'express';
import cors from 'cors';
import { statusCodes } from './utils/statusCodes';
import route from './routes';
import path from 'path';

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
    this.app.use(route);
    this.app.use(cors());
    this.app.use('/images', express.static(path.join(__dirname, '../images')));
  }

  public start(PORT: string | number): void {
    const server = this.app.listen(PORT, () => {
      try {
        console.log(`Server is running at http://localhost:${PORT}`);
      } catch(err) {
        console.log(err);
      }

    process.on('SIGINT', () => {
      server.close()

      console.log('App finished');
    })
      
    });
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(statusCodes.OK).send('Express + TypeScript');
    });
  }
}

export { App };

export const { app } = new App();