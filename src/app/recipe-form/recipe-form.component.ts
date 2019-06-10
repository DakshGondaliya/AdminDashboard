import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List, Parent } from './list';
import { FormService } from './form.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  recipe: List;

  parent = Parent;
  posts: List[] = [];

  constructor(private fb: FormBuilder, private fsrevic: FormService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeForm = this.fb.group({
      recipe_code: '',
      recipe_name: '',
      parent_recipe: '',
      variants: '',
      reference_url: '',
      possible_measurements: '',
      typeofrecipe: '',
      upload_image: '',
      description: ''
    });
  }

  onSubmit() {
    this.recipe = this.recipeForm.value;
    console.log(this.recipe);
    this.recipeForm.reset();
    this.fsrevic.createPost(this.recipe).subscribe(
      data => this.posts.push(data)
    );
  }

}
