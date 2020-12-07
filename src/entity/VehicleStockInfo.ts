import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity()
export class VehicleStockInfo {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type=>Vehicle, vshop => vshop.stocks)
    vehicle: Vehicle

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
        type: 'float'
    })
    closingUnits: number;

    @Column({
        default: 0,
        type: 'float'
    })
    soldUnits: number;
}
