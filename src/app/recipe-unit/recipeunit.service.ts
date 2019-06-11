import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeunitService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url + '');
  }
}
