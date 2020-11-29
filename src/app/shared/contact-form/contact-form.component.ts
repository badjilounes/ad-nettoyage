import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailData } from '../../core/mailer/mailer.interface';
import { MailerService } from '../../core/mailer/mailer.service';
import { SnackbarService } from '../../core/snackbar/snackbar.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [DatePipe],
})
export class ContactFormComponent implements OnInit {

  minDate: Date;

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly mailer: MailerService,
    private readonly snackBar: SnackbarService,
    private readonly date: DatePipe,
  ) {
    this.minDate = new Date();
    this.minDate.setHours(this.minDate.getHours() + 6);
    this.minDate.setHours(8, 0, 0, 0);

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      society: [''],
      phone: [''],
      date: [this.minDate],
      comments: ['']
    });

    this.form.controls.date.valueChanges.subscribe((value) => {
      const dateWithoutSeconds = new Date(value);
      dateWithoutSeconds.setSeconds(0, 0);
      this.form.controls.date.setValue(dateWithoutSeconds, { emitEvent: false });
    });
  }

  ngOnInit(): void {
  }

  async send(): Promise<void> {
    this.snackBar.dismiss();
    const data: MailData = this.form.value;

    if (data.date) {
      data.date = this.date.transform(data.date, 'medium');
    }

    const sent = await this.mailer.sendMail(data);

    if (sent) {
      this.snackBar.showMessage('quote.mail.ok');
    } else {
      this.snackBar.showError('quote.mail.error');
    }
  }

}

