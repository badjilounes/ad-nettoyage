import { FocusableOption, FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as Hammer from 'hammerjs';

@Directive({
  selector: '[carousel-item]',
})
export class CarouselItem implements FocusableOption {
  @HostBinding('attr.role') readonly role = 'listitem';
  @HostBinding('style.width') width = '100%';
  @HostBinding('style.height') height = '100%';
  @HostBinding('tabindex') tabindex = '-1';

  constructor(readonly carousel: Carousel, readonly element: ElementRef) {
  }

  focus(): void {
    this.element.nativeElement.focus({ preventScroll: true });
  }
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Carousel implements AfterContentInit, AfterViewInit {
  @Input('aria-label') ariaLabel: string;
  @Input() showArrows = true;
  @ContentChildren(CarouselItem) items: QueryList<CarouselItem>;
  @ViewChild('contentWrapper') wrapper: ElementRef;
  position = 0;

  itemsArray: CarouselItem[] = [];
  private focusKeyManager: FocusKeyManager<CarouselItem>;

  constructor() {
  }

  private _index = 0;

  get index(): number {
    return this._index;
  }

  set index(i: number) {
    this._index = i;
  }

  onKeydown(event: KeyboardEvent) {
    switch (event.key) {

      case 'ArrowLeft':
        this.previous();
        this.focusKeyManager.setPreviousItemActive();
        this._updateItemTabIndices();
        break;

      case 'ArrowRight':
        this.next();
        this.focusKeyManager.setNextItemActive();
        this._updateItemTabIndices();
        break;

      default:
        break;
    }
  }

  ngAfterContentInit(): void {
    this.focusKeyManager =
      new FocusKeyManager<CarouselItem>(this.items) as FocusKeyManager<CarouselItem>;
    this.itemsArray = this.items.toArray();
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.wrapper.nativeElement);
    hammer.on('swipeleft swiperight', event => {
      if (event.type === 'swiperight') {
        this.previous();
      } else if (event.type === 'swipeleft') {
        this.next();
      }
    });
  }

  next() {
    const isOutOfBounds = this.index === this.items.length - 1;
    if (isOutOfBounds) {
      this._shiftItems(-(this.items.length - 1));
    } else {
      this._shiftItems(1);
    }
  }

  previous() {
    const isOutOfBounds = this.index === 0;
    if (isOutOfBounds) {
      this._shiftItems(this.items.length - 1);
    } else {
      this._shiftItems(-1);
    }
  }

  goTo(index: number) {
    this._shiftItems(index - this.index);
  }

  private _updateItemTabIndices() {
    this.items.forEach((item: CarouselItem) => {
      item.tabindex = item === this.focusKeyManager.activeItem ? '0' : '-1';
    });
  }

  private _shiftItems(shiftIndex: number) {
    this.index += shiftIndex;
    this.position += shiftIndex * 100;
    this.items.forEach((item: CarouselItem) => {
      item.element.nativeElement.style.transform = `translateX(-${this.position}%)`;
    });
  }
}

