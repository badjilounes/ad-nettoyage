import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatCarouselModule } from './carousel/carousel.module';
import { NavigationComponent } from './navigation/navigation.component';
import { RoutingService } from './routing/routing.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule,
  CommonModule,
  FlexLayoutModule,

  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCarouselModule,
];

@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent
  ],
  imports: modules,
  exports: modules,
  providers: [RoutingService],
})
export class AppCoreModule {
  constructor(
    private readonly routing: RoutingService,
  ) {
    this.routing.init();
  }
}
