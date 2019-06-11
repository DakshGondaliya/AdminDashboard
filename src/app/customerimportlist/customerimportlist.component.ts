import { Component, OnInit } from '@angular/core';
import { CustomerImport } from '../customerimport';
import { CustomerimportlistService } from './customerimportlist.service';


@Component({
  selector: 'app-customerimportlist',
  templateUrl: './customerimportlist.component.html',
  styleUrls: ['./customerimportlist.component.css']
})
export class CustomerimportlistComponent implements OnInit {

  cImport: CustomerImport[];

  constructor( private ciService: CustomerimportlistService) { }

  ngOnInit() {
    this.ciService.getData().subscribe((data: CustomerImport[]) => {
      this.cImport = data;
    });
  }

}
