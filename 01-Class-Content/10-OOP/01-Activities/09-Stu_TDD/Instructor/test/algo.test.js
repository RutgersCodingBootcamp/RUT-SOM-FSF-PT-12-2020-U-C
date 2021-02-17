const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {

  });

  describe("isPalindrome", () => {
    it("should return false, if it isn't a string to begin with", () => {
      // setup
      //nothing
      const expected = false;
      const algorithm = new Algo();

      // execute
      const result = algorithm.isPalindrome();

      // expect
      expect(result).toEqual(expected);

      // teardown
    });
    it("should return false, if the input was ball", () => {
      // setup
      const input = "ball";
      const expected = false;
      const algorithm = new Algo();

      // execute
      const result = algorithm.isPalindrome(input);

      // expect
      expect(result).toEqual(expected);

      // teardown
    });
    
    it("should return true, if the input was racecar", () => {
      // setup
      const input = "racecar";
      const expected = true;
      const algorithm = new Algo();

      // execute
      const result = algorithm.isPalindrome(input);

      // expect
      expect(result).toEqual(expected);

      // teardown
    });
  });

  describe("capitalize", () => {
    
  });
});
