import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pie',
      'its a pie',
      'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b6973ac85e7b417b5717c6fe25d0157&auto=format&fit=crop&w=500&q=60'
    )
  ];
  @Output()
  activeRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}
  handleRecipeActivated(recipe: Recipe) {
    this.activeRecipe.emit(recipe);
  }
}
