import { Character } from "./character";

export class King extends Character {
  constructor(tvShow, name, house, age, status, rulingYears) {
    super(tvShow, name, house, age, status);
    this.rulingYears = rulingYears;
  }
}
