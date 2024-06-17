import { POI } from 'src/poi/persistance-layer/poi.entity';
import { Repository } from 'typeorm';
import { CreatePoiDto } from '../dtos/createPoi.dto';
import { Address } from 'src/poi/persistance-layer/address.entity';
import { PumpDto } from '../dtos/pump.dto';
import { Pump } from 'src/poi/persistance-layer/pump.entity';
export declare class PoiService {
    private readonly poiRepo;
    private readonly addressRepo;
    private readonly pumpRepo;
    constructor(poiRepo: Repository<POI>, addressRepo: Repository<Address>, pumpRepo: Repository<Pump>);
    createPoi(createPoiDto: CreatePoiDto): Promise<void>;
    getPois(skip: number, take: number): Promise<POI[]>;
    deletePoi(poiId: number): Promise<void>;
    addPumpsToPoi(poiId: number, pumpDto: PumpDto[]): Promise<void>;
}
