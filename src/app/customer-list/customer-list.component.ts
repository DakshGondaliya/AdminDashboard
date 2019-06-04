import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clist, Ctype } from './clist';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  clistForm: FormGroup;
  clist: Clist;
  cType = Ctype; 

  constructor( private cl: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
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
