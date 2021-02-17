import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Product } from  "./Product";
import {Supplier}  from "./Supplier"

 @Entity()
  export class Purchase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    supplierName: string;

    @Column()
    product: string;

    supplier:Supplier

   
}