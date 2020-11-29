import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../core/material.module';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
