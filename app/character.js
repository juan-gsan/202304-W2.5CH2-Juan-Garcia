export class Character {
  constructor(tvShow, name, house, age, communicate, status = "alive") {
    this.tvShow = tvShow;
    this.name = name;
    this.house = house;
    this.age = age;
    this.communicate = this.saySentence();
    this.status = status;
  }

  endLife() {
    this.status = "passed";
    return this.status;
  }

  saySentence() {
    this.communicate = `${this.communicate}`;
    return this.communicate;
  }
}
