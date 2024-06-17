import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";
import { POI } from "./poi.entity";

@Entity('Pump')
export class Pump {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Product)
    @JoinTable()
    fuelProducts: Product[];

    @ManyToOne(() => POI)
    poi: POI;
}