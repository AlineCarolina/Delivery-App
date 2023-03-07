import { Model, DataTypes } from 'sequelize';
import db from '.';
import { User } from './user.model';

export class Sale extends Model {
    public id!: number;

    public user_id!: number;

    public seller_id!: number;

    public total_price!: number;

    public delivery_address!: string;

    public delivery_number!: string;

    public sale_date!: Date;

    public status!: string;
}

Sale.init({
  user_id: DataTypes.NUMBER,
  seller_id: DataTypes.NUMBER,
  total_price: DataTypes.DECIMAL(9, 2),
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  sale_date: DataTypes.DATE,
  status: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: "sale",
  tableName: "sales",
  underscored: true,
  timestamps: false,
});

Sale.belongsTo(User, { foreignKey: "user_id", as: "user" });
Sale.belongsTo(User, { foreignKey: "seller_id", as: "seller" });

