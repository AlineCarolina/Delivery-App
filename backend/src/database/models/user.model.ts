import { Model, DataTypes } from "sequelize";
import db from ".";

export class User extends Model {
    public id!: number;

    public username!: string;

    public email!: string;

    public password!: string;

    public role!: string;
}

User.init({
  username: DataTypes.STRING,
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'user',
  tableName: 'users',
  underscored: true,
  timestamps: false,
});

User.sync({ force: true });
