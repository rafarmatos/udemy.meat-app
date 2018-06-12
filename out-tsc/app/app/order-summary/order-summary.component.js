var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { log } from 'util';
var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
    };
    OrderSummaryComponent.prototype.enviarAvaliacao = function (r) {
        log("Teste: " + r);
        /*Aqui eu chamo o service que enviaria um post com a nota da avaliação*/
    };
    OrderSummaryComponent.prototype.rate = function () {
        this.rated = true;
    };
    OrderSummaryComponent = __decorate([
        Component({
            selector: 'mt-order-summary',
            templateUrl: './order-summary.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());
export { OrderSummaryComponent };
//# sourceMappingURL=order-summary.component.js.map