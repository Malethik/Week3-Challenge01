import { Player } from '.';

export class Councilor extends Player {
  councilor: string;

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    councilor: string,
    interaction: string
  ) {
    super(name, family, age, status);
    this.councilor = councilor;
    this.interaction = interaction;
  }

  talk() {
    super.talk();
  }
}
