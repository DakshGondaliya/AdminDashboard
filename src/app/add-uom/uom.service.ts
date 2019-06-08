import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Uom } from './uom';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( private http: HttpClient) { }

  createPost( uom: Uom): Observable<any>{
    return this.http.post(this.url + 'uom', uom, this.httpOptions);
  }
}
