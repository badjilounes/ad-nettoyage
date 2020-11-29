import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AppSharedModule } from '../shared/shared.module';
import { QuoteComponent } from './quote.component';



@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    AppSharedModule,
  ]
})
export class QuoteModule { }
