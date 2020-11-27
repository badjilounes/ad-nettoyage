import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  snackRef: MatSnackBarRef<SimpleSnackBar>;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService,
  ) { }

  showMessage(message: string, action?: string, translationParameters?: { [key: string]: string }, config?: MatSnackBarConfig): void {
    const snackConfig: MatSnackBarConfig = Object.assign({}, { duration: 3000 }, config);
    this.show(message, action, translationParameters, snackConfig);
  }

  showError(message: string, action?: string, translationParameters?: { [key: string]: string }, config?: MatSnackBarConfig): void {
    const snackConfig: MatSnackBarConfig = Object.assign({}, { duration: 3000, panelClass: 'snack-error' }, config);
    this.show(message, action, translationParameters, snackConfig);
  }

  dismiss(): void {
    if (this.snackRef) {
      this.snackRef.dismiss();
    }
  }

  private show(message: string, action?: string, translationParameters?: { [key: string]: string }, config?: MatSnackBarConfig): void {
    this.dismiss();
    this.translate.get([message, action], translationParameters).toPromise().then(
      (translations) => {
        this.snackRef = this.snackBar.open(translations[message], translations[action], config);
      }
    );
  }
}
