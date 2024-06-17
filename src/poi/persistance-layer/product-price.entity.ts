import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('ProductPrice')
export class ProductPrice {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product)
    product: Product;

    @Column()
    price: number;

    @Column()
    currency: string;
}