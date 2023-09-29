import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberComponent } from './component/subscriber/subscriber.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { MealComponent } from './component/meal/meal.component';
const routes: Routes = [
  { path: 'meals', component: MealComponent },
  { path: 'ingredients', component: IngredientComponent },
  { path: 'subscribers', component: SubscriberComponent },
  { path: '', redirectTo: '/meals', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
