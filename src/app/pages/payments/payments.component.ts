import { Component, OnInit } from '@angular/core';
import {SharedsService} from "../../shared/shareds.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  price: number | undefined;

  constructor(private shared: SharedsService) { }

  ngOnInit(): void {
    this.price = this.shared.getPrice();
  }





}
