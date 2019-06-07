import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Package } from './package';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  packageForm: FormGroup;
  package: Package;

  posts: Package[];

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.packageForm = this.fb.group({
        package_name: '',
        package_code: '',
        plan_name: '',
        dietician_name: '',
        duration: '',
        isGroupPackage: false, 
        description: '',
      
    });
  }

  onSubmit() {
    this.package = this.packageForm.value;
    console.log(this.package);
    this.packageForm.reset();
  }


}
