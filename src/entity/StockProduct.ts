import {Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Shop } from "./Shop";

@Entity('stock_products')
export class StockProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Shop, shop => shop.products)
    @JoinColumn()
    shop: Shop

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    serialNumber: string;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        type: 'float',
        nullable: false
    })
    costPrice: number;

    @Column({
        type: 'float',
        nullable: false
    })
    sellingPrice: number;

    @Column({
        type: 'float',
        nullable: false
    })
    minPrice: number;

    @Column({
        type: 'float'
    })
    maxPrice: number;

    @Column({
        type: 'float',
        nullable: false
    })
    quantity: number;

}
