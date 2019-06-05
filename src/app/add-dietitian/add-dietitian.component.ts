import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dietitian } from '../addDietitian';

@Component({
  selector: 'app-add-dietitian',
  templateUrl: './add-dietitian.component.html',
  styleUrls: ['./add-dietitian.component.css']
})
export class AddDietitianComponent implements OnInit {

  dietitianForm: FormGroup;
  dietitan: Dietitian;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.dietitianForm = this.fb.group({
      dietitian_code: '',
      dietitian_name: '',
      qualification: '',
      dietitian_email: '',
      dietitian_contactno: '',
      upload_photo: '',
      description: '',
      address1: '',
      address2: '',
      state: '',
      city: '',
      pincode: '',
      dietitian_isactive: false
    });
  }

  onSubmit() {
    this.dietitan = this.dietitianForm.value;
    console.log(this.dietitan);
    this.dietitianForm.reset();
  }

}
