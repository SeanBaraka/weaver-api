import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { AuthRole } from "./AuthRole";

@Entity('user_logins')
export class AuthUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salt: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    passwordHash: string;

    @OneToOne(type => AuthRole)
    @JoinColumn()
    role: AuthRole

}
