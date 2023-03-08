import { Model, DataTypes } from 'sequelize';
import db from '.';

export class Product extends Model {
    public name!: string;

    public price!: number;

    public url_image!: string;
}

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    url_image: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: "product",
    tableName: "products",
    underscored: true,
  timestamps: false,
});
