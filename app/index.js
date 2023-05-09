import { Character } from "./character.js";
import { King } from "./king.js";
import { Fighter } from "./fighter.js";
import { Counselor } from "./counselor.js";
import { Squire } from "./squire.js";

const talk = () => {
  const charactersContainer = [];

  const myCharacter = new King("Joffrey", "Baratheon", 20, 5);

  const myCharacter2 = new Fighter("Jamie", "Lannister", 30, "sword", 7);

  const myCharacter3 = new Fighter("Daenerys", "Targaryen", 25, "axe", 5);

  const myCharacter4 = new Counselor("Tyrion", "Lannister", 35, "Daenerys");

  const myCharacter5 = new Squire("Bronn", "Lannister", 40, "Jamie", 10);

  charactersContainer.push(
    myCharacter,
    myCharacter2,
    myCharacter3,
    myCharacter4,
    myCharacter5
  );
  console.log(charactersContainer);
  const messages = [];
  for (let character = 0; character < charactersContainer.length; character++) {
    messages.push(charactersContainer[character].communicate);
  }

  console.log(messages);
  return messages;
};

talk();
