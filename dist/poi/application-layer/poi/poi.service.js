"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const poi_entity_1 = require("../../persistance-layer/poi.entity");
const typeorm_2 = require("typeorm");
const address_entity_1 = require("../../persistance-layer/address.entity");
const pump_entity_1 = require("../../persistance-layer/pump.entity");
const uuid_1 = require("uuid");
const product_entity_1 = require("../../persistance-layer/product.entity");
let PoiService = class PoiService {
    constructor(poiRepo, addressRepo, pumpRepo) {
        this.poiRepo = poiRepo;
        this.addressRepo = addressRepo;
        this.pumpRepo = pumpRepo;
    }
    async createPoi(createPoiDto) {
        const { status, address, openningHours } = createPoiDto;
        const poiAddress = await this.addressRepo.save(address);
        const poi = new poi_entity_1.POI();
        poi.address = poiAddress;
        poi.openningHours = openningHours;
        poi.status = status;
        await this.poiRepo.save(poi);
    }
    async getPois(skip, take) {
        return this.poiRepo.find({
            relations: {
                address: true,
                pumps: true,
            },
            skip,
            take
        });
    }
    async deletePoi(poiId) {
        await this.poiRepo.delete({ id: poiId });
    }
    async addPumpsToPoi(poiId, pumpDto) {
        const poi = await this.poiRepo.findOne({ where: { id: poiId } });
        if (!poi) {
            throw new common_1.NotFoundException('Poi not found');
        }
        pumpDto.map(async (dto) => {
            const pump = new pump_entity_1.Pump();
            pump.poi = poi;
            pump.id = (0, uuid_1.v4)();
            pump.name = dto.name;
            const productFuels = dto.fuelProducts.map((fuelProduct) => {
                const product = new product_entity_1.Product();
                product.id = fuelProduct;
                return product;
            });
            pump.fuelProducts = productFuels;
            await this.pumpRepo.save(pump);
        });
    }
};
exports.PoiService = PoiService;
exports.PoiService = PoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(poi_entity_1.POI)),
    __param(1, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __param(2, (0, typeorm_1.InjectRepository)(pump_entity_1.Pump)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PoiService);
//# sourceMappingURL=poi.service.js.map