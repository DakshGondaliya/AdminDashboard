import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerImport, Selectpackage, Gender, Selectgroup } from '../customerimport';
import { Package } from '../add-package/package';
import { ImportService } from './import.service';
import { PackageService } from '../add-package/package.service';

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

  posts: CustomerImport[] = [];
  packages: Package[];

  constructor(private ci: FormBuilder, private imService: ImportService) {
    this.createImportForm();
  }

  ngOnInit() {
    this.imService.getData().subscribe((data: Package[]) => {
      this.packages = data;
    });
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
    this.imService.createPost(this.cimport).subscribe(
      data => this.posts.push(data)
    );
  }

}
