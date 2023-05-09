import { Character } from "./character";

export class Fighter extends Character {
  constructor(tvShow, name, house, age, communicate, status, weapon, skills) {
    super(tvShow, name, house, age, communicate, status);
    this.weapon = weapon;
    this.skills = skills;
  }
}
