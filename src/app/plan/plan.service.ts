import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plan } from './plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  serverUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor( private http: HttpClient ) { }

  createPost( plan: Plan): Observable<any>{
    
    return this.http.post(this.serverUrl + 'plan', plan, this.httpOptions);
     
  }
  
  getData(id: string) {
    return this.http.get<Plan>(this.serverUrl + 'plan');
  }

  updatePost( plan: Plan, id){
    return this.http.put<Plan>(this.serverUrl + 'plan/' + id, plan,this.httpOptions);
  } 
}
