import { Player } from '.';

export class Fighter extends Player {
  weapon: string;
  dexterity: number;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    weapon: string,
    dexterity: number,
    interaction: string
  ) {
    super(name, family, age, status);
    this.weapon = weapon;
    this.dexterity = dexterity;
    this.interaction = interaction;
  }

  talk() {
    super.talk();
  }
}
