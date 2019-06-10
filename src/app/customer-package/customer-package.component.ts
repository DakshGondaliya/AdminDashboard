import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-list/customer.service';
import { Table } from '../customer-list/table';
import { PackageService } from '../add-package/package.service';
import { Package } from '../add-package/package';
import { Dietitian } from '../dietitian/dietitian';
import { DietitianService } from '../dietitian/dietitian.service';

@Component({
  selector: 'app-customer-package',
  templateUrl: './customer-package.component.html',
  styleUrls: ['./customer-package.component.css']
})
export class CustomerPackageComponent implements OnInit {

  customer: Table[];
  packages: Package[];
  dietitians: Dietitian[];
  

  constructor( private cservice: CustomerService, 
    private pService: PackageService,
    private dService: DietitianService) { }

  ngOnInit() {
    this.cservice.getData().subscribe((data: Table[]) => {
      this.customer = data;
    });
    this.pService.getData().subscribe((data: Package[]) => {
      this.packages = data;
    });
    this.dService.getData().subscribe((data: Dietitian[]) => {
      this.dietitians = data;
    });
  }

}
