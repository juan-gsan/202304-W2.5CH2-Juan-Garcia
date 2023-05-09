import { Character } from "./character";

export class Counselor extends Character {
  constructor(tvShow, name, house, age, status, characterAdvised) {
    super(tvShow, name, house, age, status);
    this.characterAdvised = characterAdvised;
  }
}
