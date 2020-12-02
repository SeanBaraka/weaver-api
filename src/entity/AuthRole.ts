import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { AuthUser } from "./AuthUser";

@Entity('user_roles')
export class AuthRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => AuthUser, user => user.role)
    users: AuthUser[]
}
