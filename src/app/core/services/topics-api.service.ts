import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {TopicsInput} from "../models/inputs/topics-input";
import {TopicsOutput} from "../models/outputs/topics-output";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TopicsApiService {

  basePath='https://ilanguage-318118.rj.r.appspot.com/api/topic';

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

  addTopic(data: any): Promise<TopicsInput>{
    return this.http.post<TopicsInput>(this.basePath, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }

  getAllTopics(): Promise<TopicsOutput>{
    return this.http.get<TopicsOutput>(this.basePath)
      .pipe(retry(2), catchError(this.handleError)).toPromise();
  }


}
