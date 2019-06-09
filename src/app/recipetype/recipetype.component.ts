import { Component, OnInit } from '@angular/core';
import { RecipetypeService } from './recipetype.service';
import { Recipe } from '../add-recipe/recipe';

@Component({
  selector: 'app-recipetype',
  templateUrl: './recipetype.component.html',
  styleUrls: ['./recipetype.component.css']
})
export class RecipetypeComponent implements OnInit {

  recipe: Recipe[];

  constructor( private rService: RecipetypeService) { }

  ngOnInit() {
    this.rService.getData().subscribe(
      (data:Recipe[]) => {
        this.recipe = data;
      }
    )
  }

}
