import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Uom } from './uom';
import { UomService } from './uom.service';

@Component({
  selector: 'app-add-uom',
  templateUrl: './add-uom.component.html',
  styleUrls: ['./add-uom.component.css']
})
export class AddUomComponent implements OnInit {

  uomForm: FormGroup;
  uom: Uom;

  posts: Uom[];

  constructor( private fb: FormBuilder, private uomservice: UomService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.uomForm = this.fb.group({
      uom_code: '',
      uom_name: '',
      uom_value: '',
    });
  }

  onSubmit() {
    this.uom = this.uomForm.value;
    console.log(this.uom);
    this.uomForm.reset();
    this.uomservice.createPost(this.uom).subscribe(
      data => this.posts.push(data)
    );
  }

}
