import { Component, OnInit } from '@angular/core';
import { UlistService } from './ulist.service';
import { Uom } from '../add-uom/uom';

@Component({
  selector: 'app-unitofmeasurement',
  templateUrl: './unitofmeasurement.component.html',
  styleUrls: ['./unitofmeasurement.component.css']
})
export class UnitofmeasurementComponent implements OnInit {

  uom: Uom[];

  constructor( private ulistservice: UlistService) { }

  ngOnInit() {
    this.ulistservice.getData().subscribe((data:Uom[]) => {
      this.uom = data;
    });
  }

}
