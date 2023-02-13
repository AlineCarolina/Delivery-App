import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "salesProducts",
})

export class SalesProducts extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    product!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantity!: number;
}