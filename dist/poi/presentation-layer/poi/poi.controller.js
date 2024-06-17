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
exports.PoiController = void 0;
const common_1 = require("@nestjs/common");
const createPoi_dto_1 = require("../../application-layer/dtos/createPoi.dto");
const poi_service_1 = require("../../application-layer/poi/poi.service");
let PoiController = class PoiController {
    constructor(poiService) {
        this.poiService = poiService;
    }
    getPois(skip, take) {
        return this.poiService.getPois(skip, take);
    }
    createPoi(createPoiDto) {
        return this.poiService.createPoi(createPoiDto);
    }
    deltePoi(poiId) {
        return this.poiService.deletePoi(poiId);
    }
    addPumpsToPoi(poiId, pumpDto) {
        return this.poiService.addPumpsToPoi(poiId, pumpDto);
    }
};
exports.PoiController = PoiController;
__decorate([
    (0, common_1.Get)(':skip/:take'),
    __param(0, (0, common_1.Param)('skip')),
    __param(1, (0, common_1.Param)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PoiController.prototype, "getPois", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPoi_dto_1.CreatePoiDto]),
    __metadata("design:returntype", Promise)
], PoiController.prototype, "createPoi", null);
__decorate([
    (0, common_1.Delete)('/:poiId'),
    __param(0, (0, common_1.Param)('poiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PoiController.prototype, "deltePoi", null);
__decorate([
    (0, common_1.Post)('/:poiId'),
    __param(0, (0, common_1.Param)('poiId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], PoiController.prototype, "addPumpsToPoi", null);
exports.PoiController = PoiController = __decorate([
    (0, common_1.Controller)('poi'),
    __metadata("design:paramtypes", [poi_service_1.PoiService])
], PoiController);
//# sourceMappingURL=poi.controller.js.map