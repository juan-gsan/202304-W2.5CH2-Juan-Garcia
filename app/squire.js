import { Character } from "./character";

export class Squire extends Character {
  constructor(
    tvShow,
    name,
    house,
    age,
    communicate,
    status,
    knight,
    pelotismo
  ) {
    super(tvShow, name, house, age, communicate, status);
    this.knight = knight;
    this.pelotismo = pelotismo;
  }
}
