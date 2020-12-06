import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatCarouselModule } from '../../carousel/carousel.module';
import { HomeCarouselComponent } from './home-carousel.component';



@NgModule({
  declarations: [
    HomeCarouselComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCarouselModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    HomeCarouselComponent
  ]
})
export class HomeCarouselModule { }
