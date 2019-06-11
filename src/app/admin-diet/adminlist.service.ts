import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminlistService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url + 'cus_import');
  }
}
