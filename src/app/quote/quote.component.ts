import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../core/breakpoint/breakpoint.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  providers: [DatePipe],
})
export class QuoteComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpoint.isHandset$;
  recommendations = [1, 2, 3, 4];
  constructor(
    private readonly breakpoint: BreakpointService,
  ) {
  }

  ngOnInit(): void {
  }

}
