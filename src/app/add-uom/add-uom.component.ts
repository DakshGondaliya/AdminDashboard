import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Uom } from './uom';

@Component({
  selector: 'app-add-uom',
  templateUrl: './add-uom.component.html',
  styleUrls: ['./add-uom.component.css']
})
export class AddUomComponent implements OnInit {

  uomForm: FormGroup;
  uom: Uom;

  constructor( private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.uomForm = this.fb.group({
      name: '',
      defaultvalue: '',
    });
  }

  onSubmit() {
    this.uom = this.uomForm.value;
    console.log(this.uom);
    this.uomForm.reset();
  }

}
