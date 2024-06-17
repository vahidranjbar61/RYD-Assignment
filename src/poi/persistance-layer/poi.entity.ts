import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../utility/status.enum";
import { Address } from "./address.entity";
import { OpenningHours } from "../utility/opening-houres.enum";
import { Pump } from "./pump.entity";

@Entity('POI')
export class POI {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: Status;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @Column()
    openningHours: OpenningHours;

    @OneToMany(() => Pump, (pump) => pump.poi)
    @JoinColumn()
    pumps: Pump[];

}