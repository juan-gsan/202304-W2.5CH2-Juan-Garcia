export class Character {
  constructor(tvShow, name, house, age, status = "alive") {
    this.tvShow = tvShow;
    this.name = name;
    this.house = house;
    this.age = age;
    this.status = status;
  }

  endLife() {
    this.status = "passed";
    return this.status;
  }
}
