import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Customer } from "./Customer";
import { Shop } from "./Shop";

@Entity('sales_records')
export class SaleRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => Shop, shop => shop.sales)
    shop: Shop;

    @ManyToOne(type => Customer, customer => customer.saleRecords, {nullable: true})
    @JoinColumn()
    customer: Customer;

    @Column()
    receiptNumber: string;

    @Column()
    paymentMethod: string;

    @Column({
        nullable: true
    })
    transactionID: string;

    @Column('text')
    saleItems: string;

    @Column('float')
    saleAmount: number;

    @Column('float')
    receivedAmount: number;

    @Column('float')
    balance: number;

}
