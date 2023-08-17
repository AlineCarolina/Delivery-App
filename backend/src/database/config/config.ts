module.exports = {
    username: process.env.DB_USER || "root",
    password:  process.env.DB_PASSWORD || "senha-mysql",
    database: process.env.DB_NAME || "delivery-app",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql"
}
