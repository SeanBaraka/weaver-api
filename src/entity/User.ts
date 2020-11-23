import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import { Vehicle } from "./Vehicle";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    role: string;

    @Column()
    idNumber: string;

}
