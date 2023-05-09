export class Character {
  constructor(name, house, age) {
    this.tvShow = "Game of Thrones";
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = "alive";
  }

  endLife() {
    this.status = "passed";
    return this.status;
  }

  saySentence() {
    return `${this.communicate}`;
  }
}
