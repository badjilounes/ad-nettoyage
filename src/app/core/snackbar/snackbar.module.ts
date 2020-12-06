import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';



@NgModule({
  imports: [MatSnackBarModule],
  providers: [SnackbarService]
})
export class SnackbarModule { }
