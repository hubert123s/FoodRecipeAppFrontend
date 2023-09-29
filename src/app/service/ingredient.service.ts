import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient} from 'src/app/model/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:8080/ingredient';  // replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  getIngredientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  saveIngredient(ingredient: Ingredient): Observable<any> {
    return this.http.post(this.apiUrl, ingredient);
  }

  deleteIngredient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
