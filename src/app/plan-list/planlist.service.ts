import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plist} from './plist';

@Injectable({
  providedIn: 'root'
})
export class PlanlistService {

  constructor( private http: HttpClient ) { }
  url = 'http://localhost:3000/';

  getData() {
    return this.http.get(this.url + 'plan');
  }
}
