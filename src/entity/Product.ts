import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    name: string;

    @Column({
        type: 'float'
    })
    unitPrice: number;

    @Column({
        type: 'float'
    })
    availableUnits: number
}
