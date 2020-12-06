import { NgModule } from '@angular/core';
import { HomeCarouselModule } from './home-carousel/home-carousel.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeCarouselModule,
  ]
})
export class HomeModule { }
