import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { SaleRecord } from "./SaleRecord";

@Entity('customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: true
    })
    location: string;

    @Column({
        nullable: true
    })
    telephone: string;

    @OneToMany(type => SaleRecord, saleRecord => saleRecord.customer, {nullable: true})
    saleRecords: SaleRecord[]
}
