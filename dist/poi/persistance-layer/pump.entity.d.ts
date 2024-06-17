import { Product } from "./product.entity";
import { POI } from "./poi.entity";
export declare class Pump {
    id: string;
    name: string;
    fuelProducts: Product[];
    poi: POI;
}
