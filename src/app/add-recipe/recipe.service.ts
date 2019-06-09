import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from './recipe';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  createPost( recipe:Recipe): Observable<any>{
    return this.http.post(this.url + 'recipe', recipe, this.httpOptions);
  }
}
