import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    zipCode: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;
}