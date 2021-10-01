import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SharedsService} from "../../shared/shareds.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private shared: SharedsService) {
    this.form = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required],
    })
    shared.setUserType(0);
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'pepe' && password == '123'){
      //TODO:
      this.shared.setUserType(1);
      this.fakeLoading();
    }
    else if(usuario == 'roberto' && password == '123'){
      this.shared.setUserType(2);
      this.fakeLoading();
    }
    else {
      this.error();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña ingresados son invalidos','',{duration:3000,horizontalPosition : 'center', verticalPosition:'bottom'})
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['main']);
    }, 1500)
  }

}
