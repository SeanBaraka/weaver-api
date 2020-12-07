import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
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

    @ManyToOne(type => AuthRole, r => r.users)
    @JoinColumn()
    role: AuthRole

}
