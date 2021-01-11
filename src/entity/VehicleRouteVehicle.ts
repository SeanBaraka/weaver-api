import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('vehicle_route_driver')
export class VehicleRouteVehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    vehicle: string;

    @Column()
    driver: string;

    @Column()
    route: string;

}
