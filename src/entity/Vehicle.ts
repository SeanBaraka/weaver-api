import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('available_vehicles')
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    modelType: string;

    @Column()
    plateNumber: string;
}
