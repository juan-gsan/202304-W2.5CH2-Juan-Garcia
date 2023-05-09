import { Character } from "./character";

export class Squire extends Character {
  constructor(tvShow, name, house, age, status, knight, pelotismo) {
    super(tvShow, name, house, age, status);
    this.knight = knight;
    this.pelotismo = pelotismo;
  }
}
