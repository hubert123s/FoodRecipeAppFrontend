import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/model/meal.model';
import { Ingredient } from 'src/app/model/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class MealService {
  private readonly apiUrl = 'http://localhost:8080/meal';

  constructor(private http: HttpClient) { }

  getAllMeals(pageNumber: number, pageSize: number, sortBy: string, sortDirection: string): Observable<Meal[]> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('sortDirection', sortDirection);

    return this.http.get<Meal[]>(this.apiUrl, { params });
  }
  deleteMeal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updateMeal(id: number, updatedMeal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.apiUrl}/${id}`, updatedMeal);
  }
  findByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name`, { params: { name: name } });
  }
  findWithoutFewIngredients(ingredients: string[]): Observable<any> {
    return this.http.get(`${this.apiUrl}/ingredients`, { params: { without: ingredients } });
  }
  getIngredientsByMealId(id: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.apiUrl}/${id}/ingredients`);
  }
  getAmountRates() {
    return this.http.get<number>(`${this.apiUrl}/size`);
  }
}
