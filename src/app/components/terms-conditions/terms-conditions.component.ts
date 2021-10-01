import { Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogTermComponent} from './dialog-term/dialog-term.component';
@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent{

constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogTermComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
