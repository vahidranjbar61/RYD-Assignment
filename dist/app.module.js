"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const poi_module_1 = require("./poi/poi.module");
const address_entity_1 = require("./poi/persistance-layer/address.entity");
const poi_entity_1 = require("./poi/persistance-layer/poi.entity");
const product_price_entity_1 = require("./poi/persistance-layer/product-price.entity");
const product_entity_1 = require("./poi/persistance-layer/product.entity");
const pump_entity_1 = require("./poi/persistance-layer/pump.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: configService.get('TYPE'),
                    host: configService.get('HOST'),
                    port: configService.get('PORT'),
                    username: configService.get('USER_NAME'),
                    password: configService.get('PASSWORD'),
                    database: configService.get('DB'),
                    entities: [poi_entity_1.POI, product_price_entity_1.ProductPrice, pump_entity_1.Pump, product_entity_1.Product, address_entity_1.Address],
                    synchronize: true,
                }),
            }),
            poi_module_1.PoiModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map