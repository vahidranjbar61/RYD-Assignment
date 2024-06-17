import { Address } from "src/poi/persistance-layer/address.entity";
import { OpenningHours } from "src/poi/utility/opening-houres.enum";
import { Status } from "src/poi/utility/status.enum";
export declare class CreatePoiDto {
    status: Status;
    address: Address;
    openningHours: OpenningHours;
}
