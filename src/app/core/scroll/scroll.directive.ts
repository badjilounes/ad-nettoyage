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
    const scrollHeight = this.elementRef.nativeElement.scrollHeight;

    fromEvent(this.elementRef.nativeElement, 'scroll').pipe(
      throttleTime(10),
      map(() => this.elementRef.nativeElement.scrollTop),
      pairwise(),
      map(([previous, current]): ScrollDirection => this.resolveScrollDirection(previous, current, scrollHeight)),
      distinctUntilChanged(),
      share(),
    ).subscribe((direction: ScrollDirection) => this.scrolled.emit(direction));
  }

  private resolveScrollDirection(previous: number, current: number, height: number): ScrollDirection {
    let direction = (current < previous ? ScrollDirection.Up : ScrollDirection.Down);

    if (current === height) {
      direction = ScrollDirection.Down;
    }

    if (current === 0) {
      direction = ScrollDirection.Up;
    }

    return direction;
  }
}
