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

    @Column()
    unitPrice: number;

    @Column()
    openingUnits: number;

    @Column()
    closingUnits: number;

    @Column({
        default: 0
    })
    soldUnits: number;
}
