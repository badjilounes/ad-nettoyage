import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailData } from '../core/mailer/mailer.interface';
import { MailerService } from '../core/mailer/mailer.service';
import { SnackbarService } from '../core/snackbar/snackbar.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  providers: [DatePipe],
})
export class QuoteComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    society: [''],
    phone: [''],
    date: [''],
    comments: ['']
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly mailer: MailerService,
    private readonly snackBar: SnackbarService,
    private readonly date: DatePipe,
  ) { }

  ngOnInit(): void {
  }

  async send(): Promise<void> {
    this.snackBar.dismiss();
    const data: MailData = this.form.value;

    if (data.date) {
      data.date = this.date.transform(data.date, 'fullDate');
    }

    const sent = await this.mailer.sendMail(data);

    if (sent) {
      this.snackBar.showMessage('quote.mail.ok');
    } else {
      this.snackBar.showError('quote.mail.error');
    }
  }

}
