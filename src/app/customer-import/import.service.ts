import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerImport } from '../customerimport';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor( private http:HttpClient) { }

  getData() {
    return this.http.get(this.url + 'package');
  }
  
  createPost( customerImport: CustomerImport): Observable<any>{
    return this.http.post(this.url + 'cus_import', customerImport, this.httpOptions);
  } 
}
