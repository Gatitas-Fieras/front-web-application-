import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { SubscriptionInput } from "../models/inputs/subscription-input";
import { SubscriptionOutput } from "../models/outputs/subscription-output";
import { catchError, retry } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SubscriptionApiService{
  //basePath = 'https://60c2e09f917002001739da47.mockapi.io/subscription';
  basePath='https://ilanguage-318118.rj.r.appspot.com/api/subscriptions';

  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Promise<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.').toPromise();
  }

  addSubscription(item: any): Promise<SubscriptionInput>{
    return this.http.post<SubscriptionInput>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getSubscriptionById(id: number): Promise<SubscriptionOutput> {
    return this.http.get<SubscriptionOutput>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getSubscriptionByName(name: String): Promise<SubscriptionOutput> {
    return this.http.get<SubscriptionOutput>(`${this.basePath}/${name}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getSubscriptionByPrice(price: number): Promise<SubscriptionOutput> {
    return this.http.get<SubscriptionOutput>(`${this.basePath}/${price}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getAllSubscriptions(): Observable<SubscriptionOutput>{
    return this.http.get<SubscriptionOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Student
  updateStudent(id: number, item: SubscriptionInput): Promise<SubscriptionInput>{
    return this.http.put<SubscriptionInput>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }



}
