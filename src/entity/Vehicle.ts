import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";
import { VehicleRoute } from "./VehicleRoute";
import { VehicleStockInfo } from "./VehicleStockInfo";

@Entity('available_vehicles')
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    modelType: string;

    @Column()
    plateNumber: string;

    @OneToMany(type => VehicleStockInfo, vstock => vstock.vehicle)
    stocks: VehicleStockInfo[]

}
