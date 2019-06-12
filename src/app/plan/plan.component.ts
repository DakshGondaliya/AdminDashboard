import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plan, Plans } from './plan';
import { PlanService } from './plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;

  planForm: FormGroup;
  plan: Plan;

  posts: Plan[] = [];
  id;
  constructor(private pf: FormBuilder,
    private planService: PlanService,
    private router: Router,
    private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.pageTitle = 'Edit';
      this.planService.getData(this.id).subscribe(
        res => {
          this.planForm.patchValue({

            plan_name: res.plan_name,
            plan_code: res.plan_code,
            description: res.description,
            isCustomPlan: res.isCustomPlan,
            isDefault: res.isDefault
          });
        }
      );
    }else{
      this.pageTitle = 'Create';
    }
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

  
  updatePost() {
      this.plan = this.planForm.value;
      console.log(this.plan);
      this.planForm.reset();
      this.planService.updatePost(this.plan, this.id)
      .subscribe(
        (data) => {this.posts.push(data);}
        // success => alert("Done"),
        // error => alert("error")
      );
  }

  onSubmit() {
    if(this.id){
      this.updatePost()
    }else{
    this.plan = this.planForm.value;
    console.log(this.plan);
    this.planForm.reset();

    
    this.planService.createPost(this.plan).subscribe(
      data => this.posts.push(data)
    );}
  }



}
