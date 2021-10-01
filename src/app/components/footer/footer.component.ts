import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

}



