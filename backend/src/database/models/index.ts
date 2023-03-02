import { Sequelize } from 'sequelize';

const databaseConfig = require('../config/config');

export default new Sequelize(databaseConfig);
