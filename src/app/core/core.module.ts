import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppMissingTranslationHandler } from './missing-translation.handler';
import { NavigationModule } from './navigation/navigation.module';
import { RoutingService } from './navigation/routing/routing.service';
import { SnackbarModule } from './snackbar/snackbar.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const modules = [
  NavigationModule,
  SnackbarModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  imports: [
    ...modules,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: AppMissingTranslationHandler }
    })
  ],
  exports: [
    ...modules,
  ],
})
export class AppCoreModule {
  constructor(
    private readonly translate: TranslateService,
    private readonly routing: RoutingService,
    private readonly adapter: NgxMatDateAdapter<Date>,
  ) {
    this.translate.setDefaultLang('fr');
    this.adapter.setLocale('fr-FR');
    this.routing.init();
    registerLocaleData(localeFr);
  }
}
