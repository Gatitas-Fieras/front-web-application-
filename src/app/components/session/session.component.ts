import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogSessionComponent} from './dialog-session/dialog-session.component';
import {SessionApiService} from "../../core/services/session-api.service";
import {OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SharedsService} from "../../shared/shareds.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{

  userType :  number;
  sessions : any[] = [];

  constructor(public dialog: MatDialog, private sessionApi: SessionApiService, private router: Router, private _snackBar: MatSnackBar, private shared: SharedsService) {
    this.sessions = [];
    shared.getUserType()==1? this.userType = 1 : this.userType=2;
  }
  openDialog(){
    this.dialog.open(DialogSessionComponent);
  }

  getAllSessions(): void{
    this.sessionApi.getAllSessions().then((response: any) =>{
      for(let i = 0; i<response.content.length; i++){
        this.sessions.push(response.content[i]);
      }
      console.log(this.sessions);
    })
  }

  ngOnInit(): void {
    this.getAllSessions()
  }


  reserve(id: any){
    console.log(id);
    this.sessionApi.assingUserToSession(id,1)
      .then((response)=>{
        console.log(response);
      })
      .catch((e)=>{
        console.log(e.value);
      })
  }

}
