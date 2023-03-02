import { Model, DataTypes } from "sequelize";
import db from ".";
import { Product } from "./product.model";
import { Sale } from "./sale.model";

export class SaleProduct extends Model {
    public sale_id!: number;

    public product_id!: number;

    public quantity!: number;
}

SaleProduct.init({
    sale_id: DataTypes.NUMBER,
    product_id: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
}, {
    sequelize: db,
    modelName: 'saleProduct',
    tableName: 'saleProducts',
    underscored: true,
  timestamps: false,
});

Sale.belongsToMany(Product, { as: 'products', through: SaleProduct, foreignKey: 'sale_id', otherKey: 'product_id' });

Product.belongsToMany(Sale, { as: 'sales', through: SaleProduct, foreignKey: 'product_id', otherKey: 'sale_id' });

/* SaleProduct.sync({ force: true }); */