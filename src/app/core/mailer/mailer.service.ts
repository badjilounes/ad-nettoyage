import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as smtp from '../../../assets/js/smtp.js';
import { environment } from '../../../environments/environment.js';
import { MailData } from './mailer.interface.js';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(
    private readonly translate: TranslateService,
  ) { }

  async sendMail(form: MailData): Promise<string> {
    const body = Object.keys(form)
      .map((key) => (`<b>${this.translate.instant('mailer.' + key)}: </b>${form[key]}`))
      .join('<br />');
    return smtp.Email.send({
      Host: environment.mail.host,
      Username: environment.mail.username,
      Password: environment.mail.password,
      To: environment.mail.to,
      From: environment.mail.from,
      Subject: this.translate.instant('mailer.subject'),
      Body: body
    });
  }
}
