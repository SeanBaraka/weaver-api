import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('stock_summaries')
export class EndDayReport {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date

    @Column()
    shop: string;

    @Column({
        type: "text"
    })
    stockItems: string

    @Column()
    openingStockAmount: number

    @Column()
    closingStockAmount: number

    @Column()
    soldStockAmount: number

}
