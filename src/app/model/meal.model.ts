export class Meal {
  id: number;
  name: string;
  preparationTime: number;
  description: string;
  typeMeal: string;
    // @ts-ignore
    constructor()
    constructor(id: number, name: string,preparationTime: number,description: string,typeMeal: string) {
      this.id=id;
      this.name = name;
      this.preparationTime=preparationTime;
      this.description=description;
      this.typeMeal=typeMeal;
    }
}
