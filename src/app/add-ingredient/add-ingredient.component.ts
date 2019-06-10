import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from './ingredient';
import { AddingredientService } from './addingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  ingredientForm: FormGroup;
  ingredient: Ingredient;

  posts: Ingredient[];

  constructor(private fb: FormBuilder, private iService: AddingredientService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.ingredientForm = this.fb.group({
      food_group: '',
      food_code: '',
      type: '',
      food_name: '',
      guju_name: '',
      quantity: '',
      one_exchange: '',
      energy_kj: '',
      energy_kcal: '',
      gi_value: '',
      gl_value: '',
      carbohydrate: '',
      protein: '',
      total_fibre: '',
      solublf: '',
      in_solublf: '',
      invisible_totalfat: '',
      visiblefat: '',
      thiamine: '',
      riboflavin: '',
      niacin: '',
      biotin: '',
      folates: '',
      ascorbic_Acid: '',
      vitamin_d2d3: '',
      calcium: '',
      phosphorous: '',
      iron: '',
      sodium: '',
      potassium: '',
      zinc: '',
      magnesium: '',
      sfa: '',
      isActive: false
    });
  }

  onSubmit() {
    this.ingredient = this.ingredientForm.value;
    console.log(this.ingredient);
    this.ingredientForm.reset();
    this.iService.createPost(this.ingredient).subscribe(
      data => this.posts.push(data)
    );
  }

}
