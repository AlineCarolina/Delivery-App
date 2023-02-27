import { Model, DataTypes } from "sequelize";
import db from ".";

export class SaleProduct extends Model {
    public product!: number;

    public quantity!: number;
}

SaleProduct.init({
    name: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
}, {
    sequelize: db,
    modelName: 'saleProduct',
    tableName: 'saleProducts',
    underscored: true,
  timestamps: false,
});

SaleProduct.sync({ force: true });