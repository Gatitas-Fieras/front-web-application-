import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedsService {
  price:number;
  constructor() {
    this.price = 0;
  }

  setPrice(num: number){
    this.price = num;
  }

  getPrice(){
    return this.price;
  }
}
