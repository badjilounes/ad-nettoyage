import { NgModule } from '@angular/core';
import { ContactFormModule } from './contact-form/contact-form.module';

@NgModule({
  imports: [
    ContactFormModule
  ],
  exports: [
    ContactFormModule
  ],
})
export class AppSharedModule { }
