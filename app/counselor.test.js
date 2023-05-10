import { Counselor } from "./counselor";

describe("Given Counselor class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with Counselor and Character class properties", () => {
      const counselor = new Counselor(
        "Game of Thrones",
        "Joffrey",
        "Baratheon",
        20,
        true,
        "king"
      );

      expect(counselor).toHaveProperty("tvShow", "Game of Thrones");
      expect(counselor).toHaveProperty("name", "Joffrey");
      expect(counselor).toHaveProperty("house", "Baratheon");
      expect(counselor).toHaveProperty("age", 20);
      expect(counselor).toHaveProperty("alive", true);
      expect(counselor).toHaveProperty("characterAdvised", "king");
    });
  });
});
