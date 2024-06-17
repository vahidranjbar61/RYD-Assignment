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
Object.defineProperty(exports, "__esModule", { value: true });
exports.POI = void 0;
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../utility/status.enum");
const address_entity_1 = require("./address.entity");
const opening_houres_enum_1 = require("../utility/opening-houres.enum");
const pump_entity_1 = require("./pump.entity");
let POI = class POI {
};
exports.POI = POI;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], POI.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], POI.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], POI.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], POI.prototype, "openningHours", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pump_entity_1.Pump, (pump) => pump.poi),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], POI.prototype, "pumps", void 0);
exports.POI = POI = __decorate([
    (0, typeorm_1.Entity)('POI')
], POI);
//# sourceMappingURL=poi.entity.js.map