import { Component, OnInit } from '@angular/core';
import { AdminlistService } from './adminlist.service';
import { CustomerImport } from '../customerimport';


@Component({
  selector: 'app-admin-diet',
  templateUrl: './admin-diet.component.html',
  styleUrls: ['./admin-diet.component.css']
})
export class AdminDietComponent implements OnInit {

  customer: CustomerImport[];

  constructor( private aService:AdminlistService) { }

  ngOnInit() {
    this.aService.getData().subscribe((data: CustomerImport[]) => {
      this.customer = data;
    });
  }

}
