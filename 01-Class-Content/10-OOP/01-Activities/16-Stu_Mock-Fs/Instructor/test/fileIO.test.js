const FileIO = require("../fileIO");
const fs = require("fs");

// will allow you to use mock functions on the fs module
jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // S
      // file input and expected are the same
      let input = "carrot.txt";
      let inputCharSet = "utf8";
      let fileio = new FileIO();
      let returnValue = "carrot";

      // setup mock for fs.readFileSync 
      fs.readFileSync.mockReturnValue(returnValue);

      // Execute
      // ?? read
      let results = fileio.read(input);

      // Expect
      // tests the return value
      expect(results).toEqual(returnValue);

      // tests the input value
      expect(fs.readFileSync).lastCalledWith(input, inputCharSet);
      // T
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // S
      let inputPath = "carrot.txt";
      let inputData = "carrot";
      let returnValue = true;
      let fileio = new FileIO();

      // setup mock
      fs.writeFileSync.mockReturnValue(returnValue);

      // Execute
      let results = fileio.write(inputPath, inputData);

      // Expect
      // 1 returnValue
      expect(results).toEqual(returnValue);
      // 2 inputPath
      // 3 inputData
      expect(fs.writeFileSync).lastCalledWith(inputPath, inputData);

      // T
    });
  });
});
