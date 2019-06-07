import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plan } from './plan';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  planForm: FormGroup;
  plan: Plan;

  constructor(private pf: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.planForm = this.pf.group({
      plan_name: '',
      plan_code: '',
      description: '',
      isCustomPlan: false,
      isDefault: false
    });
  }

  onSubmit() {
    this.plan = this.planForm.value;
    console.log(this.plan);
    this.planForm.reset();
  }

}
