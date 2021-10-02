import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedsService {
  price:number;
  private _userType: number;
  private id: number;

  constructor() {
    this.price = 0;
    this._userType = 0;
    this.id =0;
  }

  setId(id: number){
    this.id = id;
  }

  getId(){
    return this.id;
  }

  setPrice(num: number){
    this.price = num;
  }

  getPrice(){
    return this.price;
  }


  getUserType(): number {
    return this._userType;
  }

   setUserType(value: number) {
    this._userType = value;
  }
}
