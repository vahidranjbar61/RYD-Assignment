import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductPrice } from "./product-price.entity";

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ProductPrice, (price) => price.product)
    prices: ProductPrice[];
}