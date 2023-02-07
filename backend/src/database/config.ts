import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "27012000",
    database: "delivery-app",
    logging: false,
    models: [User]
});

export default connection;