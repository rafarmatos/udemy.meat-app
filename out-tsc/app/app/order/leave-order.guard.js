var LeaveOrderGuard = /** @class */ (function () {
    function LeaveOrderGuard() {
    }
    LeaveOrderGuard.prototype.canDeactivate = function (orderComonent, activedRoute, routerState) {
        if (!orderComonent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compra?');
        }
        else {
            return true;
        }
    };
    return LeaveOrderGuard;
}());
export { LeaveOrderGuard };
//# sourceMappingURL=leave-order.guard.js.map