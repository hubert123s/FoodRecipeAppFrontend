export class Subscriber {
  name: string;
  email: string;
  // @ts-ignore
  constructor()
  constructor( name: string,email: string) {
    this.name = name;
    this.email=email;
  }
}
