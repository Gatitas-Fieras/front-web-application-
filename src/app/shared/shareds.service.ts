import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedsService {
  price:number;
  private _userType: number;

  constructor() {
    this.price = 0;
    this._userType = 0;
  }

  setPrice(num: number){
    this.price = num;
  }

  getPrice(){
    return this.price;
  }


  get userType(): number {
    return this._userType;
  }

  set userType(value: number) {
    this._userType = value;
  }
}
