import { Component, OnInit } from '@angular/core';
import { PlanlistService } from './planlist.service';
import { HttpClient } from '@angular/common/http';
import { Plist} from './plist';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  plan: Plist[];

  constructor( private planService: PlanlistService) { }

  ngOnInit() {
    this.planService.getData().subscribe((data: Plist[]) => {
      this.plan = data;
    });
  }

}
