import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(){
    this._snackBar.open('terms and conditions were accepted correctly','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }

  openSnackBarWhenNotAccepted(){ //
    this._snackBar.open('terms and conditions were not accepted correctly','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }
}


