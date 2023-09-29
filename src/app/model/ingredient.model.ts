export class Ingredient {
  name: string;
  amount: number;
  mealId: number;

  // @ts-ignore
  constructor()
  constructor( name: string,amount: number,mealId: number) {
    this.name = name;
    this.amount=amount;
    this.mealId=mealId;
  }
}
