import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../add-package/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagelistService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url + 'package');
  }
}
