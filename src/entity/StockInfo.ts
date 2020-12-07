import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Shop } from "./Shop";

@Entity('stock_info')
export class StockInfo {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type=>Shop, shop => shop.stocks)
    @JoinColumn()
    shop: Shop

    @CreateDateColumn()
    createdAt: Date

    @Column()
    productName: string;

    @Column({
        type: 'float'
    })
    unitPrice: number;

    @Column({
        type: 'float'
    })
    openingUnits: number;

    @Column({
        default: 0,
        type: 'float'
    })
    addedUnits: number;

    @Column({
        type: 'float'
    })
    closingUnits: number;

    @Column({
        default: 0,
        type: 'float'
    })
    soldUnits: number;

}
