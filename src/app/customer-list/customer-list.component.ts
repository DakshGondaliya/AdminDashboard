import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clist, Ctype } from './clist';
import { CustomerService } from './customer.service'; 
import { Table } from './table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  clistForm: FormGroup;
  clist: Clist;
  cType = Ctype; 

  customer: Table[];

  constructor( private cl: FormBuilder, private cservice: CustomerService) {
    this.createForm();
  }

  ngOnInit() {
    this.cservice.getData().subscribe((data: Table[]) => {
      this.customer = data;
    });
  }

  createForm(){
    this.clistForm = this.cl.group({
      ctype:''
    });
  }

  onSubmit() {
    this.clist = this.clistForm.value;
    console.log(this.clist);
    this.clistForm.reset();
  }

}
