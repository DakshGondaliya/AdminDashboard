import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Package, Duration } from './package';
import { Dietitian } from '../dietitian/dietitian';
import { DietitianService } from '../dietitian/dietitian.service';
import { PackageService } from './package.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  packageForm: FormGroup;
  package: Package;

  durationType = Duration;

  packages: Package[];
  dietitians: Dietitian[];

  constructor(private fb: FormBuilder, 
    private pService: PackageService, 
    private dService: DietitianService) {
    this.createForm()
  }

  ngOnInit() {
    this.pService.getData().subscribe((data: Package[]) => {
      this.packages = data;
    });
    this.dService.getData().subscribe((data: Dietitian[]) => {
      this.dietitians = data;
    });
  }

  createForm() {
    this.packageForm = this.fb.group({
        package_name: '',
        package_code: '',
        plan_name: '',
        dietitian_name: '',
        duration: 'Select Duration',
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
