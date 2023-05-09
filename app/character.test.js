import { Character } from "./character.js";
describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with Character class properties", () => {
      const character = new Character(
        "Game of Thrones",
        "Joffrey",
        "Baratheon",
        20,
        "alive"
      );

      expect(character).toHaveProperty("tvShow", "Game of Thrones");
      expect(character).toHaveProperty("name", "Joffrey");
      expect(character).toHaveProperty("house", "Baratheon");
      expect(character).toHaveProperty("age", 20);
      expect(character).toHaveProperty("status", "alive");
    });
  });
});
