import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppRoute } from '../routing/app-route.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() routes: AppRoute[] = [];
  @Input() isHandset = false;

  @Output() drawerToggled: EventEmitter<void> = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  logo = 'assets/images/logo.jpg';

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
  }

}
