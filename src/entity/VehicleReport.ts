import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('vehicle_reports')
export class VehicleReport {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    vehicle: string;

    @Column({
        type: 'text'
    })
    stock: string;

}
