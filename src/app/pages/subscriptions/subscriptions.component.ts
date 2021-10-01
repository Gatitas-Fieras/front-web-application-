import { Component, OnInit } from '@angular/core';
import {SubscriptionApiService} from "../../core/services/subscription-api.service"
import {Router} from "@angular/router";
import { SubscriptionOutput } from "../../core/models/outputs/subscription-output";
import { AfterViewInit, ViewChild } from '@angular/core';
import {SharedsService} from "../../shared/shareds.service";


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit, AfterViewInit {
  subscriptionData: SubscriptionOutput;

  constructor(private subscriptionApi:SubscriptionApiService, private router: Router, private shared: SharedsService) {
    this.subscriptionData = {} as SubscriptionOutput;
    this.subscriptions = [];
  }

  ngOnInit( ): void {
    this.getAllSubscriptions();
  }

  subscriptions : any[] = [];


  getAllSubscriptions(): void{
    this.subscriptionApi.getAllSubscriptions().subscribe((response: any)=>{
      for (let i=0; i<response.content.length; i++){
        // @ts-ignore
        this.subscriptions.push(response.content[i]);
      }
      console.log(response);

    })

  }

  ngAfterViewInit(): void {
  }

  goToPay(price: number){
    this.shared.setPrice(price);
    this.router.navigate(['/register/pay']);
    console.log(price);
  }
}
