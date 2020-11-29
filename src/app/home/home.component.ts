import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointService } from '../core/breakpoint/breakpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'assets/images/home/nettoyage-1.jpg',
    'assets/images/home/nettoyage-2.jpg',
    'assets/images/home/nettoyage-3.jpg',
    'assets/images/home/nettoyage-4.jpg',
  ];

  isHandset$: Observable<boolean> = this.breakpoint.isHandset$;

  constructor(
    private readonly breakpoint: BreakpointService,
  ) { }

  ngOnInit(): void {

  }
}
