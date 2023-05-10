import { Character } from "./character.js";
describe("Given Character class", () => {
  const character = new Character(
    "Game of Thrones",
    "Joffrey",
    "Baratheon",
    20,
    true
  );
  describe("When we instantiate it", () => {
    test("Then it should create an object with Character class properties", () => {
      expect(character).toHaveProperty("tvShow", "Game of Thrones");
      expect(character).toHaveProperty("name", "Joffrey");
      expect(character).toHaveProperty("house", "Baratheon");
      expect(character).toHaveProperty("age", 20);
      expect(character).toHaveProperty("alive", true);
    });
  });
});
