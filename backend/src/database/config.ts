import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product.model";
import { Sale } from "../models/sale.model";
import { SalesProducts } from "../models/salesProducts.model";
import { User } from "../models/user.model";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "27012000",
    database: "delivery-app",
    logging: false,
    models: [User, Product, SalesProducts, Sale]
});

export default connection;