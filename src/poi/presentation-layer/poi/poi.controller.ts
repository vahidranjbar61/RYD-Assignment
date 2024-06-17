import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePoiDto } from 'src/poi/application-layer/dtos/createPoi.dto';
import { PumpDto } from 'src/poi/application-layer/dtos/pump.dto';
import { PoiService } from 'src/poi/application-layer/poi/poi.service';
import { POI } from 'src/poi/persistance-layer/poi.entity';

@Controller('poi')
export class PoiController {
    public constructor(private readonly poiService: PoiService) {}

    @Get(':skip/:take')
    public getPois(
        @Param('skip') skip: number,
        @Param('take') take: number,
    ): Promise<POI[]> {
        return this.poiService.getPois(skip, take);
    }

    @Post()
    public createPoi(@Body() createPoiDto: CreatePoiDto): Promise<void> {
        return this.poiService.createPoi(createPoiDto);
    }

    @Delete('/:poiId')
    public deltePoi(@Param('poiId') poiId: number): Promise<void> {
        return this.poiService.deletePoi(poiId);
    }

    @Post('/:poiId')
    public addPumpsToPoi(
        @Param('poiId') poiId: number,
        @Body() pumpDto: PumpDto[],
    ): Promise<void> {
        return this.poiService.addPumpsToPoi(poiId, pumpDto);
    }
}
