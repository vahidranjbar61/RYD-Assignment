import { CreatePoiDto } from 'src/poi/application-layer/dtos/createPoi.dto';
import { PumpDto } from 'src/poi/application-layer/dtos/pump.dto';
import { PoiService } from 'src/poi/application-layer/poi/poi.service';
import { POI } from 'src/poi/persistance-layer/poi.entity';
export declare class PoiController {
    private readonly poiService;
    constructor(poiService: PoiService);
    getPois(skip: number, take: number): Promise<POI[]>;
    createPoi(createPoiDto: CreatePoiDto): Promise<void>;
    deltePoi(poiId: number): Promise<void>;
    addPumpsToPoi(poiId: number, pumpDto: PumpDto[]): Promise<void>;
}
