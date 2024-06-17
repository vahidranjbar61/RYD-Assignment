import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POI } from './persistance-layer/poi.entity';
import { ProductPrice } from './persistance-layer/product-price.entity';
import { Pump } from './persistance-layer/pump.entity';
import { Product } from './persistance-layer/product.entity';
import { Address } from './persistance-layer/address.entity';
import { PoiController } from './presentation-layer/poi/poi.controller';
import { PoiService } from './application-layer/poi/poi.service';
import { ProductService } from './application-layer/product/product.service';
import { ProductController } from './presentation-layer/product/product.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [POI, ProductPrice, Pump, Product, Address]
        ),
    ],
    controllers: [PoiController, ProductController],
    providers: [PoiService, ProductService]
})
export class PoiModule { }
