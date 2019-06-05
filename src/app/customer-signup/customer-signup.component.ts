import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, Gender, Activity, Dietryhabits } from '../feedback';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

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
  dietryHabits = Dietryhabits;



  constructor( private fb: FormBuilder) {
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
      dietry_habits: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
