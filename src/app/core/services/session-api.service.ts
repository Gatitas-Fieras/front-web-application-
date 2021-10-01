import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {SessionOutput} from "../models/outputs/session-output"
import {SubscriptionInput} from "../models/inputs/subscription-input";
import {catchError, retry} from "rxjs/operators";
import{SessionInput} from "../models/inputs/session-input";

@Injectable({
  providedIn: 'root'
})
export class SessionApiService {

  basePath='https://ilanguage-318118.rj.r.appspot.com/api/sessions';

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

  //? TODO:  do i have to replace for SessionInput?
  addSession(data: any): Promise<SessionInput>{
    return this.http.post<SessionInput>(this.basePath, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getAllSessions(): Promise<SessionOutput>{
    return this.http.get<SessionOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  assingUserToSession(sessionId: number, userId: number): Promise<any> {

     return this.http.post<SessionOutput>(`${this.basePath}/${sessionId}/${userId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }
}
