import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {UserInput} from "../models/inputs/user-input";
import {catchError, retry} from "rxjs/operators";
import firebase from "firebase";
import { UserOutput } from "../models/outputs/userOutput";

@Injectable({providedIn: 'root'})
export class UserApiService {
  basePath='https://ilanguage-318118.rj.r.appspot.com/api/user';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Promise<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.').toPromise();
  }

  addUser(data: any): Promise<UserInput>{
    return this.http.post<UserInput>(this.basePath, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();

  }

  // Get User by Id
  getUserById(id: number): Observable<UserOutput> {
    return this.http.get<UserOutput>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get User Data
  getAllUsers(): Observable<UserOutput>{
    return this.http.get<UserOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
}
