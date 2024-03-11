import { Player } from '.';

export class Squire extends Player {
  helping: string;
  servility: number;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    helping: string,
    servility: number,
    interaction: string
  ) {
    super(name, family, age, status);
    this.helping = helping;
    this.servility = servility;
    this.interaction = interaction;
  }

  talk() {
    super.talk();
  }
}
