import { Component, OnInit } from '@angular/core';

import { Recipe } from './Recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './app-recipes.component.html',
  styleUrls: ['./app-recipes.component.css']
})
export class AppRecipesComponent implements OnInit {
  activeRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
  handleActiveRecipe(recipe: Recipe) {
    this.activeRecipe = recipe;
  }
}
