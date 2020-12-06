import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreModule } from './core/core.module';
import { NavigationModule } from './core/navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { PerformanceModule } from './performance/performance.module';
import { QuoteModule } from './quote/quote.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppCoreModule,
    AppRoutingModule,
    HomeModule,
    PerformanceModule,
    QuoteModule,
    NavigationModule,
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
