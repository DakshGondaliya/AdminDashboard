import { Component, OnInit } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { Ingredient } from '../add-ingredient/ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredient: Ingredient[];
  
  constructor(private Iservice: IngredientService) {}

  ngOnInit() {
    this.Iservice.getData().subscribe((data: Ingredient[]) => {
      this.ingredient = data;
    });
  }

}
