import { Player } from '.';
export class King extends Player {
  yearsOfReign: number;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    yearsOfReign: number,
    interaction: string
  ) {
    super(name, family, age, status);
    this.yearsOfReign = yearsOfReign;
    this.interaction = interaction;
  }

  talk() {
    super.talk();
  }
}
