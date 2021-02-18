import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Product } from  "./Product";
import { Purchase } from "./Purchase"
import { StockProduct } from "./StockProduct";

 @Entity()
  export class Supplier {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    supplierName: string;

    @Column()
    address: string;

    @Column()
    telephone: number;
  
    @OneToMany(type=> Purchase, pr=> pr.supplier)
    products: StockProduct[]
   
}
