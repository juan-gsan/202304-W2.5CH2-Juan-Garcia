import { King } from "./king";

describe("Given King class", () => {
  const king = new King(
    "Game of Thrones",
    "Joffrey",
    "Baratheon",
    20,
    "You're all gonna die",
    "alive",
    5
  );
  describe("When we instantiate it", () => {
    test("Then it should create an object with King and Character class properties", () => {
      expect(king).toHaveProperty("tvShow", "Game of Thrones");
      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("house", "Baratheon");
      expect(king).toHaveProperty("age", 20);
      expect(king).toHaveProperty("communicate", "You're all gonna die");
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("rulingYears", 5);
    });
  });

  describe("When we call method endLife", () => {
    test("Then it should return 'passed", () => {
      const expectedOutput = "passed";

      expect(king.endLife()).toBe(expectedOutput);
    });
  });

  describe("When we call method saySentence", () => {
    test("Then it should return 'You're all gonna die", () => {
      const expectedOutput = "You're all gonna die";

      expect(king.saySentence()).toBe(expectedOutput);
    });
  });
});
