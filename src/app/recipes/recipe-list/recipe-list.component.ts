import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://tech.caltech.edu/img/2023/mar03/cooking.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://tech.caltech.edu/img/2023/mar03/cooking.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://tech.caltech.edu/img/2023/mar03/cooking.jpg')
  ];
}
