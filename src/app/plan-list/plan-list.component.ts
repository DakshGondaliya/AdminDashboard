import { Component, OnInit } from '@angular/core';
import { PlanlistService } from './planlist.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Plan } from '../plan/plan';

import { Plist} from './plist';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  plans: Plist[];
  plan: Plan[];

  constructor( private planService: PlanlistService) { }

  ngOnInit() {
    this.planService.getData().subscribe((data: Plist[]) => {
      this.plan = data;
    });
  }

  // updatePost() {
    
  //   const id = new HttpParams;
  //   this.plan = 

  //   this.planService.updatePost(this.plan, id)
  //     .subscribe(
  //       success => alert("Done"),
  //       error => alert("error")
  //     );
  // }

}
