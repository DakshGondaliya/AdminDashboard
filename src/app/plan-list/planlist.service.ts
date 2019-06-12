import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plan } from '../plan/plan';
import { Observable } from 'rxjs';
import { Plist} from './plist';

@Injectable({
  providedIn: 'root'
})
export class PlanlistService {

  constructor( private http: HttpClient ) { }
  url = 'http://localhost:3000/plan';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  getData() {
    return this.http.get(this.url);
  }

  updatePost( plan: Plan, id){
    return this.http.put(this.url + 'plan/' + id, plan,this.httpOptions);
  } 
  
}
