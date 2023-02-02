import express, { Request, Response } from "express";
import statusCodes from "./statusCodes";
import connection from "./database/config";
import login from "./controllers/user"

const app = express();

app.use(express.json());

const PORT = 8000;

connection.sync().then(() => {
  console.log("Database synced successfully");
}).catch((err) => {
  console.log("Err", err);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (_req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

app.post('/login', login)