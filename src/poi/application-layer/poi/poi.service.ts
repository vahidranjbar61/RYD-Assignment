import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { POI } from 'src/poi/persistance-layer/poi.entity';
import { Repository } from 'typeorm';
import { CreatePoiDto } from '../dtos/createPoi.dto';
import { Address } from 'src/poi/persistance-layer/address.entity';
import { PumpDto } from '../dtos/pump.dto';
import { Pump } from 'src/poi/persistance-layer/pump.entity';
import { v4 as uuidv4 } from 'uuid';
import { Product } from 'src/poi/persistance-layer/product.entity';

@Injectable()
export class PoiService {
    public constructor(
        @InjectRepository(POI) private readonly poiRepo: Repository<POI>,
        @InjectRepository(Address) private readonly addressRepo: Repository<Address>,
        @InjectRepository(Pump) private readonly pumpRepo: Repository<Pump>,
    ) { }

    public async createPoi(createPoiDto: CreatePoiDto): Promise<void> {
        const { status, address, openningHours } = createPoiDto;
        const poiAddress = await this.addressRepo.save(address);

        const poi = new POI();
        poi.address = poiAddress;
        poi.openningHours = openningHours;
        poi.status = status;
        await this.poiRepo.save(poi);
    }

    public async getPois(skip: number, take: number): Promise<POI[]> {
        return this.poiRepo.find({
            relations: {
                address: true,
                pumps: true,
            },
            skip,
            take
        });
    }

    public async deletePoi(poiId: number): Promise<void> {
        await this.poiRepo.delete({ id: poiId });
    }

    public async addPumpsToPoi(poiId: number, pumpDto: PumpDto[]) {
        const poi = await this.poiRepo.findOne({ where: { id: poiId } });
        if (!poi) {
            throw new NotFoundException('Poi not found');
        }
        pumpDto.map(async(dto: PumpDto) => {
            const pump = new Pump();
            pump.poi = poi;
            pump.id = uuidv4();
            pump.name = dto.name;
            const productFuels = dto.fuelProducts.map((fuelProduct: number) => {
                const product = new Product();
                product.id = fuelProduct;
                return product;
            });
            pump.fuelProducts = productFuels;

            await this.pumpRepo.save(pump);
        });
    }

}
