import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { List } from '../recipe-form/list';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: List[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipeservice.getData().subscribe((data: List[]) => {
      this.recipes = data;
    });
  }

}
