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
      throttleTime(10),
      map(() => this.elementRef.nativeElement.scrollTop),
      pairwise(),
      map(([previous, current]): ScrollDirection => this.resolveScrollDirection(previous, current)),
      distinctUntilChanged(),
      share(),
    ).subscribe((direction: ScrollDirection) => this.scrolled.emit(direction));
  }

  private resolveScrollDirection(previous: number, current: number): ScrollDirection {
    const height = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
    let direction = (current - previous < 0) ? ScrollDirection.Up : ScrollDirection.Down;

    if (current < 1) {
      direction = ScrollDirection.Up;
    }

    if (current >= height) {
      direction = ScrollDirection.Down;
    }

    return direction;
  }
}
