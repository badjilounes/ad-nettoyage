import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppRouteData } from './app-route-data.interface';
import { AppRoute } from './app-route.interface';

@Injectable()
export class RoutingService {

  routes$: BehaviorSubject<AppRoute[]> = new BehaviorSubject<AppRoute[]>([]);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title,
    private readonly translate: TranslateService,
  ) {

  }

  init(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.route;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        if (currentRoute.outlet === 'primary') {
          this.setTitle(currentRoute.snapshot.data);
        }
      }
    });
  }

  getRoutesForMenu(): Observable<AppRoute[]> {
    return this.routes$.asObservable();
  }

  updateRoutesForMenu(): void {
    const routes: AppRoute[] = this.getAllRoutes()
      .filter((route) => route.data && route.data.menu);
    this.routes$.next(routes);
  }

  private getAllRoutes(): AppRoute[] {
    return (this.router.config as AppRoute[])
      .map((route: AppRoute) => this.getRouteWithChildren(route))
      .reduce((all: AppRoute[], current: AppRoute[]) => all.concat(current, []))
      .sort(this.routeSorter);
  }

  private getRouteWithChildren(route: AppRoute): AppRoute[] {
    let all = [route];
    if (route.children) {
      route.children.forEach(childRoute => all = all.concat(this.getRouteWithChildren(childRoute)));
    }
    return all;
  }

  private routeSorter = (a: AppRoute, b: AppRoute) => {
    return (a.data && a.data.order || Number.MAX_SAFE_INTEGER) - (b.data && b.data.order || Number.MAX_SAFE_INTEGER);
  }

  private setTitle(data: AppRouteData) {
    const promises = [this.translate.get('title').toPromise<string>()];
    if (data?.title) {
      promises.push(this.translate.get(data.title).toPromise<string>());
    }
    Promise.all(promises).then(([appTitle, routeTitle]) => this.title.setTitle(`${appTitle} - ${routeTitle}`));
  }
}
