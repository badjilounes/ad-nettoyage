import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppRoute } from '../routing/app-route.interface';
import { RoutingService } from '../routing/routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes$: Observable<AppRoute[]> = of([]);

  constructor(
    private readonly routing: RoutingService,
  ) {
    this.routes$ = this.routing.getRoutesForMenu();
    this.routing.updateRoutesForMenu();
  }
}