import { Model, DataTypes } from "sequelize";
import db from ".";
import { User } from "./user.model";

export class Sale extends Model {
    public id!: number;

    public user_id!: number;

    public seller_id!: number;

    public total_price!: number;

    public delivery_address!: string;

    public delivery_number!: string;

    public status!: string;
}

Sale.init({
  user_id: DataTypes.NUMBER,
  seller_id: DataTypes.NUMBER,
  total_price: DataTypes.NUMBER,
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: 'sale',
  tableName: 'sales',
  underscored: true,
  timestamps: false,
});

Sale.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Sale.belongsTo(User, { foreignKey: 'seller_id', as: 'seller' });

/* Sale.sync({ force: true }); */
