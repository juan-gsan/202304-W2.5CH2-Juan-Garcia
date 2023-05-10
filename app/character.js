export class Character {
  static tvShow = "Game of Thrones";

  constructor(name, house, age) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.alive = true;
    this.communicate = "";
  }

  endLife() {
    this.alive = false;
  }

  saySentence() {
    return this.status ? this.communicate : "I'm dead";
  }
}
