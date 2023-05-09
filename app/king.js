import { Character } from "./character";

export class King extends Character {
  constructor(tvShow, name, house, age, communicate, status, rulingYears) {
    super(tvShow, name, house, age, communicate, status);
    this.rulingYears = rulingYears;
  }
}
