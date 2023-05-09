import { Character } from "./character";

export class Fighter extends Character {
  constructor(tvShow, name, house, age, status, weapon, skills) {
    super(tvShow, name, house, age, status);
    this.weapon = weapon;
    this.skills = skills;
  }
}
