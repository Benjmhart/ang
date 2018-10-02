import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Output()
  recipeActivated = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onRecipeItemClicked(name: string) {
    this.recipeActivated.emit(name);
  }
}
