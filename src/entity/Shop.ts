import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { StockInfo } from "./StockInfo";

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
    stocks: StockInfo[]

    @Column({
        default: false
    })
    openStatus: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date
}
