import { King } from "./king";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with King and Character class properties", () => {
      const king = new King(
        "Game of Thrones",
        "Joffrey",
        "Baratheon",
        20,
        "alive",
        5
      );

      expect(king).toHaveProperty("tvShow", "Game of Thrones");
      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("house", "Baratheon");
      expect(king).toHaveProperty("age", 20);
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("rulingYears", 5);
    });
  });
});
