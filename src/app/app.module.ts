import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  imports: [
    AppCoreModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.document.body.classList.add(environment.theme);
  }
}
