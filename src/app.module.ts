import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PoiModule } from './poi/poi.module';
import { Address } from './poi/persistance-layer/address.entity';
import { POI } from './poi/persistance-layer/poi.entity';
import { ProductPrice } from './poi/persistance-layer/product-price.entity';
import { Product } from './poi/persistance-layer/product.entity';
import { Pump } from './poi/persistance-layer/pump.entity';
import { PoiService } from './poi/application-layer/poi/poi.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (
        {
          type: configService.get<string>('TYPE'),
          host: configService.get<string>('HOST'),
          port: configService.get<string>('PORT'),
          username: configService.get<string>('USER_NAME'),
          password: configService.get<string>('PASSWORD'),
          database: configService.get<string>('DB'),
          entities: [POI, ProductPrice, Pump, Product, Address],
          synchronize: true,
        } as TypeOrmModuleOptions),
    }),
    PoiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
