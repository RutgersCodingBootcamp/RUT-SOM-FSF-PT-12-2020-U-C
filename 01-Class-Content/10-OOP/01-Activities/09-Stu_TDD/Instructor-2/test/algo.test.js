const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should return null if nothing was put in", () => {
      //Setup
      // let input be nothing
      const expected = null;
      const algorithm = new Algo();

      //execute
      const result = algorithm.reverse();

      // expect
      expect(result).toEqual(expected);
      
      //teardown
    });
    it(`should return "olleH" if "Hello" was the input`, () => {
      //Setup
      const input = "Hello";
      const expected = "olleH";
      const algorithm = new Algo();

      //execute
      const result = algorithm.reverse(input);

      // expect
      expect(result).toEqual(expected);
      
      //teardown
    });
    it(`should return "" if empty string "" was the input`, () => {
      //Setup
      const input = "";
      const expected = "";
      const algorithm = new Algo();

      //execute
      const result = algorithm.reverse(input);

      // expect
      expect(result).toEqual(expected);
      
      //teardown
    });
  });

  describe("isPalindrome", () => {
    it("should return true, when the input is racecar", () => {
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
    it("should return false, when the input is bulb", () => {
      // setup
      const input = "bulb";
      const expected = false;
      const algorithm = new Algo();

      // execute
      const result = algorithm.isPalindrome(input);

      // expect
      expect(result).toEqual(expected);
      
      // teardown
    
    });
    // there are usually more test cases than this for unit testing
  });

  describe("capitalize", () => {
    it("should return 'Hello World' if the input was 'hello world' ", () => {
      // setup
      const input = "hello world";
      const expected = "Hello World";
      const algorithm = new Algo();

      // execute
      const result = algorithm.capitalize(input);

      // expect
      expect(result).toEqual(expected);

      // teardown
    
    });
    // there are usually more test cases than this for unit testing
  });
});
