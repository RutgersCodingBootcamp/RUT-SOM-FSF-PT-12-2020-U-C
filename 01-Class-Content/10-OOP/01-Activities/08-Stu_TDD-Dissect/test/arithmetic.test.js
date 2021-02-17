const Arithmetic = require("../arithmetic");

describe("Arithmetic", () => {
  describe("Initialization", () => {

    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      const num = 108;

      const obj = new Arithmetic(num);

      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      const obj = new Arithmetic();

      expect(obj.number).toEqual(0);
    });
  });

  describe("plus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(3).plus(3);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 8;
      const added = 7;
      const sum = num + added;

      const { number } = new Arithmetic(num).plus(added);

      expect(number).toEqual(sum);
    });
  });

  describe("minus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(9).minus(4);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      const { number } = new Arithmetic(num).minus(subtracted);

      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      const num = 10;
      const obj = new Arithmetic(num);

      const result = obj.value();

      expect(result).toEqual(num);
    });
  });
});

describe("Extra paranoid suite of tests", () => {
  describe("Multiply", () => {
    it("should equal zero when you multiply by 0", () => {
      // Setup
      const num = 1623478;
      const obj = new Arithmetic(num);

      // Execute
      const { number } = obj.multiply(0);

      // Expect
      expect(number).toEqual(0);

      // Tear Down -- normally not there except with databases or files
    });

    it("should equal the same number when you multiply by 1", () => {
      // Setup
      const num = 1623478;
      const obj = new Arithmetic(num);

      // Execute
      const { number } = obj.multiply(1);

      // Expect
      expect(number).toEqual(num);

      // Tear Down -- normally not there except with databases or files
    });
    
    it("should equal the same number when you dont have a parameter", () => {
      // Setup
      const num = 1623478;
      const obj = new Arithmetic(num);

      // Execute
      const { number } = obj.multiply();

      // Expect
      expect(number).toEqual(num);

      // Tear Down -- normally not there except with databases or files
    });
    it("should equal 55 when you multiply by 11 by 5", () => {
      // Setup
      const num = 11;
      const obj = new Arithmetic(num);
      const answer = 55;

      // Execute
      const { number } = obj.multiply(5);

      // Expect
      expect(number).toEqual(answer);

      // Tear Down -- normally not there except with databases or files
    });
  });
});
