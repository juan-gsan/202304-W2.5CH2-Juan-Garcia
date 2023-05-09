import { Character } from "./character";

export class Counselor extends Character {
  constructor(tvShow, name, house, age, communicate, status, characterAdvised) {
    super(tvShow, name, house, age, communicate, status);
    this.characterAdvised = characterAdvised;
  }
}
