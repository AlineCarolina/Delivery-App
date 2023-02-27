import { Model, DataTypes } from "sequelize";
import db from ".";

export class Sale extends Model {
    public user_id!: number;

    public seller_id!: number;

    public total_price!: number;

    public delivery_address!: string;

    public delivery_number!: string;

    public status!: string;
}

Sale.init({
  user_id: DataTypes.STRING,
  seller_id: DataTypes.STRING,
  total_price: DataTypes.STRING,
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

Sale.sync({ force: true });
