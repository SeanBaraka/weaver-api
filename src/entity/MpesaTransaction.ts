import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('mpesa_transactions')
export class MpesaTransaction {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    transactionID: string;

    @Column()
    type: string;

    @Column()
    amount: number
}
