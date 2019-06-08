import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, Gender, Activity, Dietaryhabits } from '../feedback';
import { SignupServiceService } from './signup-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  genderType = Gender;
  activityType = Activity;
  dietaryHabits = Dietaryhabits;

  posts: Feedback[];
  


  constructor( private fb: FormBuilder,private signupService: SignupServiceService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      customer_code: '',
      customer_name: '',
      customer_email: '',
      customer_contactno: '',
      city: '',
      birth_date: '',
      gender: '',
      height: '', 
      weight: '',
      activity: '',
      dietary_habits: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
    this.signupService.createPost(this.feedback).subscribe(
      data => this.posts.push(data)
    );
    
  }

}
