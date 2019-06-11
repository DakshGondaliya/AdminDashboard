import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerImport, Selectpackage, Gender, Selectgroup } from '../customerimport';

@Component({
  selector: 'app-customer-import',
  templateUrl: './customer-import.component.html',
  styleUrls: ['./customer-import.component.css']
})
export class CustomerImportComponent implements OnInit {

  importForm: FormGroup;
  cimport: CustomerImport;
  selectPackage = Selectpackage;
  selectGroup = Selectgroup;
  genderType = Gender;

  constructor(private ci: FormBuilder) {
    this.createImportForm();
  }

  ngOnInit() {
  }

  createImportForm() {
    this.importForm = this.ci.group({
      isIndividual: false,
      group_name: '',
      package_name: '',
      customer_name: '',
      customer_email: '',
      customer_contactno: '',
      gender: ''
    });
  }

  onSubmit() {
    this.cimport = this.importForm.value;
    console.log(this.cimport);
    this.importForm.reset();
  }

}
