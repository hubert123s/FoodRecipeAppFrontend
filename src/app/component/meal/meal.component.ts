import { Component, OnInit } from '@angular/core';
import { Meal} from 'src/app/model/meal.model';
import { Ingredient} from 'src/app/model/ingredient.model';
import { MealService } from 'src/app/service/meal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: Meal[] = [];
  mealsFound: Meal[]=[];
  mealsFoundWithoutSelectedIngredients: Meal[]=[];
  ingredientsByMealId: Ingredient[]=[];
  mealName:string = '';
  ingredients: string = '';
  pageNumber: number = 0;
  selectedPageSize : number = 2;
  sortBy: string = 'preparationTime';
  sortDirection: string = 'ASC';
  mealsSize: number = 0;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.fetchMeals();
    this.getMealsSize();
  }

  fetchMeals() {
    this.mealService.getAllMeals(this.pageNumber, this.selectedPageSize, this.sortBy, this.sortDirection).subscribe(data => {
      this.meals = data;
    });
  }
    onDelete(id: number): void {
      this.mealService.deleteMeal(id).subscribe(data => {
      this.meals = this.meals.filter(meal => meal.id !== id);
      }, error => {
      });
    }
  updateMeal(meal: Meal): void {
    this.mealService.updateMeal(meal.id, meal).subscribe(
      updatedMeal => {
        const index = this.meals.findIndex(t => t.id === updatedMeal.id);
        if (index !== -1) {
          this.meals[index] = updatedMeal;
        }
      },
      error => {
        console.log('An error occurred while updating a todo list:', error);
      }
    );
  }
    searchByName(mealName: string): void {
      if (mealName) {
        this.mealService.findByName(mealName).subscribe(data => {
          this.mealsFound = [data];
        });
      }
    }

    searchWithoutIngredients(ingredients: string): void {
      if (ingredients) {
        this.mealService.findWithoutFewIngredients(ingredients.split(',')).subscribe(data => {
          this.mealsFoundWithoutSelectedIngredients = data;
        });
      }
    }
    getIngredientsByMealId(mealId: number | null): void {
      if (mealId !== null) {
        this.mealService.getIngredientsByMealId(mealId).subscribe(
          data => {
            this.ingredientsByMealId = data;
        });
      }
    }


  nextPage() {
    this.pageNumber++;
    this.fetchMeals();
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    }
    this.fetchMeals();
  }

  changeSort(field: string) {
    this.sortBy = field;
    this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.fetchMeals();
  }

  changePageSize(size: number) {
    this.selectedPageSize = size;
    this.pageNumber = 0;
    this.fetchMeals();
  }
  getMealsSize(): void {
    this.mealService.getMealsSize().subscribe((size) => {
      this.mealsSize = size;
    });
  }
  getRoundedMaximumNumberOfPages(): number {
    return Math.floor(this.mealsSize / this.selectedPageSize);
  }
}
