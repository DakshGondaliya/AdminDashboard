import { Component, OnInit } from '@angular/core';
import { RecipeunitService } from './recipeunit.service';
import { Ingredient } from '../add-ingredient/ingredient';

@Component({
  selector: 'app-recipe-unit',
  templateUrl: './recipe-unit.component.html',
  styleUrls: ['./recipe-unit.component.css']
})
export class RecipeUnitComponent implements OnInit {

  constructor(private rService: RecipeunitService) { }

  ngOnInit() {
    this.rService.getData().subscribe((data:Ingredient[])=> {
      
    });
  }

}
