import { Component, OnInit } from '@angular/core';
import { DietitianService } from './dietitian.service';
import { Dietitian } from './dietitian';

@Component({
  selector: 'app-dietitian',
  templateUrl: './dietitian.component.html',
  styleUrls: ['./dietitian.component.css']
})
export class DietitianComponent implements OnInit {

  dietitian: Dietitian[];
  
  constructor(private dservice: DietitianService) {}

  ngOnInit() {
    this.dservice.getData().subscribe((data: Dietitian[]) => {
      this.dietitian = data;
    });
  }

}
