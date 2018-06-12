import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {OrderComponent} from './order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComonent: OrderComponent,
                activedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
    if (!orderComonent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?')
    }else {
      return true
    }
  }
}
