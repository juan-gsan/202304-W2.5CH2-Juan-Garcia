import { Fighter } from "./fighter";

describe("Given Fighter class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with Fighter and Character class properties", () => {
      const fighter = new Fighter(
        "Game of Thrones",
        "Joffrey",
        "Baratheon",
        20,
        "alive",
        "sword",
        7
      );

      expect(fighter).toHaveProperty("tvShow", "Game of Thrones");
      expect(fighter).toHaveProperty("name", "Joffrey");
      expect(fighter).toHaveProperty("house", "Baratheon");
      expect(fighter).toHaveProperty("age", 20);
      expect(fighter).toHaveProperty("status", "alive");
      expect(fighter).toHaveProperty("weapon", "sword");
      expect(fighter).toHaveProperty("skills", 7);
    });
  });
});
