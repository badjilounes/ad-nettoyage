import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PerformanceComponent } from './performance/performance.component';
import { QuoteComponent } from './quote/quote.component';
import { AppSharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    QuoteComponent,
    PerformanceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppCoreModule,
    AppSharedModule,
    AppRoutingModule,
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
