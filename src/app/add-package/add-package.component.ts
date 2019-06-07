import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Package } from './package';
import { PackageService } from './package.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  packageForm: FormGroup;
  package: Package;

  packages: Package[];

  constructor(private fb: FormBuilder, private pService: PackageService) {
    this.createForm()
  }

  ngOnInit() {
    this.pService.getData().subscribe((data: Package[]) => {
      this.packages = data;
    });
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
    this.pService.createPost(this.package).subscribe(
      data => this.packages.push(data)
    );
  }


}
