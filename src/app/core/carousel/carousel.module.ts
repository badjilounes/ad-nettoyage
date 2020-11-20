import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Carousel, CarouselItem } from './carousel.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [Carousel, CarouselItem],
  declarations: [Carousel, CarouselItem],
})
export class MatCarouselModule {
}
