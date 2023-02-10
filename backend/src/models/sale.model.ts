import { Table, Model, Column, DataType, } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "sale",
})

export class Sale extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    seller_id!: number;

    @Column({
        type: DataType.DECIMAL(9, 2),
        allowNull: false,
    })
    total_price!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    delivery_address!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    delivery_number!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    sale_date!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;
}