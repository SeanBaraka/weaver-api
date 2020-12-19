import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { shopCategory } from "./shopCategory";
import { StockInfo } from "./StockInfo";
import { StockProduct } from "./StockProduct";

@Entity('shops')
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    description: string;

    @ManyToOne(type=> shopCategory)
    @JoinColumn()
    category: shopCategory;

    @OneToMany(type=>StockInfo, stinfo => stinfo.shop, {
        cascade: true
    })
    stocks: StockInfo[];

    @OneToMany(type => StockProduct, prod => prod.shop)
    products: StockProduct[];
 
    @Column({
        default: false
    })
    openStatus: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
