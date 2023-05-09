import { King } from "./king.js";
import { Fighter } from "./fighter.js";
import { Counselor } from "./counselor.js";
import { Squire } from "./squire.js";

const charactersContainer = [];

const myCharacter1 = new King("Joffrey", "Baratheon", 20, 5);

const myCharacter2 = new Fighter("Jamie", "Lannister", 30, "sword", 7);

const myCharacter3 = new Fighter("Daenerys", "Targaryen", 25, "axe", 5);

const myCharacter4 = new Counselor("Tyrion", "Lannister", 35, "Daenerys");

const myCharacter5 = new Squire("Bronn", "Lannister", 40, "Jamie", 10);

charactersContainer.push(
  myCharacter1,
  myCharacter2,
  myCharacter3,
  myCharacter4,
  myCharacter5
);

console.log(myCharacter1.tvShow);

const talk = () => {
  const messages = [];
  messages.push(
    myCharacter1.saySentence(),
    myCharacter2.saySentence(),
    myCharacter3.saySentence(),
    myCharacter4.saySentence(),
    myCharacter5.saySentence()
  );
  return messages;
};

talk();

console.log(talk());
myCharacter2.endLife();
myCharacter4.endLife();

console.log(myCharacter2, myCharacter4);
