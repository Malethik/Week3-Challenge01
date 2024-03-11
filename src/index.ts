export class Player {
  name: string;
  family: string;
  age: number;
  status: boolean;
  interaction: string;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    interaction: string
  ) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.interaction = interaction;
  }

  talk() {
    console.log(`Soy ${this.name},${this.interaction}!`);
  }
}
