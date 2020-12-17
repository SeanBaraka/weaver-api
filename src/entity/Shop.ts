import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
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
