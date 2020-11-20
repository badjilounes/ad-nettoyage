import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppRoute } from '../routing/app-route.interface';
import { RoutingService } from '../routing/routing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  routes$: Observable<AppRoute[]> = of([]);

  constructor(
    private readonly routing: RoutingService,
  ) {
    this.routes$ = this.routing.getRoutesForMenu();
    this.routing.updateRoutesForMenu();
  }
}
