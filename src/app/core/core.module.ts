import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material.module';
import { AppMissingTranslationHandler } from './missing-translation.handler';
import { NavigationComponent } from './navigation/navigation.component';
import { RoutingService } from './routing/routing.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  MaterialModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    missingTranslationHandler: { provide: MissingTranslationHandler, useClass: AppMissingTranslationHandler }
  }),
];

@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent
  ],
  imports: modules,
  exports: [
    MaterialModule,
    TranslateModule,
  ],
  providers: [RoutingService],
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
