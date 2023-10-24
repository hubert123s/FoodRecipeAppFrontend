import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/service/ingredient.service';
import { FormsModule } from '@angular/forms';
import { Ingredient} from 'src/app/model/ingredient.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  newIngredient: Ingredient = new Ingredient();
//  ingredient: Ingredient = new Ingredient();
ingredient: Ingredient | null = null;

  ingredientId: number|null=null;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {

    console.log('IngredientComponent initialized');
  }

  getIngredient(ingredientId: number | null): void {
    console.log('getIngredient() called with id:', ingredientId);
    if (ingredientId !== null) {
      this.ingredientService.getIngredientById(ingredientId).subscribe(
        data => {
          console.log('Ingredient data received:', data);
          this.ingredient = data;
        },
        error => {
          console.log('Error occurred:', error);
        }
      );
    }
  }

  saveIngredient(newIngredient : Ingredient): void {
    console.log('saveIngredient() called');
    this.ingredientService.saveIngredient(this.newIngredient).subscribe(
      data => {
        console.log('Ingredient data saved:', data);
        this.newIngredient = data;
      },
      error => {
        console.log('Error occurred:', error);
      }
    );
  }

  deleteIngredient(ingredientId: number | null): void {
    console.log('deleteIngredient() called with id:', ingredientId);
    if (ingredientId !== null) {
      this.ingredientService.deleteIngredient(ingredientId).subscribe(
        () => {
          console.log('Ingredient deleted');
        },
        error => {
          console.log('Error occurred:', error);
        }
      );
    }
  }
}
