import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ScrollDirection } from '../../scroll/scroll-direction.enum';
import { AppRoute } from '../routing/app-route.interface';
import { RoutingService } from '../routing/routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes$: Observable<AppRoute[]> = of([]);
  showToolbar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private readonly routing: RoutingService,
  ) {
    this.routes$ = this.routing.getRoutesForMenu();
    this.routing.updateRoutesForMenu();
  }

  onScroll(event: ScrollDirection): void {
    if (event === ScrollDirection.Down) {
      this.showToolbar.next(false);
    } else {
      this.showToolbar.next(true);
    }
  }
}
