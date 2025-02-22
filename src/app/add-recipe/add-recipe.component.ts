import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;
  recipe: Recipe;

  posts: Recipe[] = [];

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeForm = this.fb.group({
      recipetype_code: '',
      recipetype_name: ''
    });
  }

  onSubmit() {
    this.recipe = this.recipeForm.value;
    console.log(this.recipe);
    this.recipeForm.reset();
    this.recipeService.createPost(this.recipe).subscribe(
      data => this.posts.push(data)
    );
  }
}
