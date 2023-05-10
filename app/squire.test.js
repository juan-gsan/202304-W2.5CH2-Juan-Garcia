import { Squire } from "./squire";

describe("Given Squire class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with Squire and Character class properties", () => {
      const squire = new Squire(
        "Game of Thrones",
        "Bronn",
        "Lannister",
        25,
        true,
        "Jaime",
        10
      );

      expect(squire).toHaveProperty("tvShow", "Game of Thrones");
      expect(squire).toHaveProperty("name", "Joffrey");
      expect(squire).toHaveProperty("house", "Baratheon");
      expect(squire).toHaveProperty("age", 20);
      expect(squire).toHaveProperty("alive", true);
      expect(squire).toHaveProperty("knight", "fighter");
      expect(squire).toHaveProperty("pelotismo", 10);
    });
  });
});
