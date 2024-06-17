"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const poi_entity_1 = require("./persistance-layer/poi.entity");
const product_price_entity_1 = require("./persistance-layer/product-price.entity");
const pump_entity_1 = require("./persistance-layer/pump.entity");
const product_entity_1 = require("./persistance-layer/product.entity");
const address_entity_1 = require("./persistance-layer/address.entity");
const poi_controller_1 = require("./presentation-layer/poi/poi.controller");
const poi_service_1 = require("./application-layer/poi/poi.service");
const product_service_1 = require("./application-layer/product/product.service");
const product_controller_1 = require("./presentation-layer/product/product.controller");
let PoiModule = class PoiModule {
};
exports.PoiModule = PoiModule;
exports.PoiModule = PoiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([poi_entity_1.POI, product_price_entity_1.ProductPrice, pump_entity_1.Pump, product_entity_1.Product, address_entity_1.Address]),
        ],
        controllers: [poi_controller_1.PoiController, product_controller_1.ProductController],
        providers: [poi_service_1.PoiService, product_service_1.ProductService]
    })
], PoiModule);
//# sourceMappingURL=poi.module.js.map