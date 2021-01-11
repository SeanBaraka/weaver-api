import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('vehicle_routes')
export class VehicleRoute {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    region: string;
}
