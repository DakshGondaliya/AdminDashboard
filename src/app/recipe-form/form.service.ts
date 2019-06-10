import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { List } from './list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor( private http:HttpClient) { }

  createPost( list: List): Observable<any>{
    return this.http.post(this.url + 'recipe', list, this.httpOptions);
  } 
}
