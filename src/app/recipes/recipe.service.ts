import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://tech.caltech.edu/img/2023/mar03/cooking.jpg'),
    new Recipe('Another Test Recipe', 'This is simple a test', 'https://tech.caltech.edu/img/2023/mar03/cooking.jpg'),
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
