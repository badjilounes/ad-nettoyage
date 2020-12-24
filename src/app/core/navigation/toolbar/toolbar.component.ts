import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../../breakpoint/breakpoint.service';
import { AppRoute } from '../routing/app-route.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {

  @Input() routes: AppRoute[] = [];
  @Input() isHandset = false;
  @Input() showToolbar = true;

  @Output() drawerToggled: EventEmitter<void> = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpoint.isHandset$;

  logo = 'assets/images/logo.jpg';

  constructor(
    private readonly breakpoint: BreakpointService,
  ) { }

  ngOnInit(): void {
  }

}
