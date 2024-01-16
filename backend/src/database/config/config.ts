module.exports = {
    username: process.env.DB_USER || "root",
    password:  process.env.DB_PASSWORD || "senha-mysql",
    database: process.env.DB_NAME || "delivery-app",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || "3306"
}
