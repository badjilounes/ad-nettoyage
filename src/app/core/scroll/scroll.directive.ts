import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, share, throttleTime } from 'rxjs/operators';
import { ScrollDirection } from './scroll-direction.enum';




@Directive({
  selector: '[appScrollDirection]',
})
export class ScrollDirective implements AfterViewInit {

  @Output() scrolled: EventEmitter<ScrollDirection> = new EventEmitter<ScrollDirection>();

  constructor(
    private readonly elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll').pipe(
      throttleTime(100),
      map(() => this.elementRef.nativeElement.scrollTop),
      pairwise(),
      map(([y1, y2]): ScrollDirection => (y2 < y1 ? ScrollDirection.Up : ScrollDirection.Down)),
      distinctUntilChanged(),
      share(),
    ).subscribe((direction: ScrollDirection) => this.scrolled.emit(direction));
  }
}
