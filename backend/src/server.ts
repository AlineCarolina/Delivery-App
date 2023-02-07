import { App } from './index';
import 'dotenv/config';
import connection from "./database/config";

const PORT = process.env.PORT || 8001;

connection.sync().then(() => {
    console.log("Database synced successfully");
}).catch((err) => {
    console.log("Err", err);
});


new App().start(PORT);