import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../feedback';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  serverUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http : HttpClient) { }
  
  createPost( feedback: Feedback): Observable<any>{
    
    return this.http.post(this.serverUrl + 'signup', feedback, this.httpOptions);
     
  }
  // enrollpost(post_info){
  //   console.log(post_info); 
  //   console.log('ggggg');
    

  //   return this.http.post<Feedback[]>(this._url+'signup',post_info).subscribe(res => console.log('Done'));;
  // }
}
