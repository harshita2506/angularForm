import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarServiceService {

  constructor(public snackBar: MatSnackBar) { }

  public showSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [className]
    });
  }

}
