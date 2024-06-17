import { Status } from "../utility/status.enum";
import { Address } from "./address.entity";
import { OpenningHours } from "../utility/opening-houres.enum";
import { Pump } from "./pump.entity";
export declare class POI {
    id: number;
    status: Status;
    address: Address;
    openningHours: OpenningHours;
    pumps: Pump[];
}
