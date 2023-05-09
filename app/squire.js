import { Character } from "./character";

export class Squire extends Character {
  constructor(tvShow, name, house, age, status, characterFighter) {
    super(tvShow, name, house, age, status);
    this.characterFighter = characterFighter;
  }
}
