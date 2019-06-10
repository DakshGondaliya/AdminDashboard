import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  getData() {
    return this.http.get(this.url + 'recipe');
  }
}
