import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from './package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor( private http:HttpClient) { }

  getData() {
    return this.http.get(this.url + 'package');
  }
  
  createPost( packag: Package): Observable<any>{
    return this.http.post(this.url + 'package', packag, this.httpOptions);
  } 
}
