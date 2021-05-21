const fs = require("fs");
const FileIO = require("../fileIO");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      // Set
      let input = "message.txt";
      let fileIO = new FileIO();
      let returnValue = "carrot";
      fs.readFileSync.mockReturnValue(returnValue);

      // Execute
      let results = fileIO.read(input);
      // Expect
      expect(results).toEqual(returnValue);
      expect(fs.readFileSync).lastCalledWith(input);
      // Teardown
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
      // Setup
      let fileIO = new FileIO();
      let inputPath = "carrot.txt";
      let inputData = "carrot";
      let returnValue = true;

      // Setup mock
      fs.writeFileSync.mockReturnValue(returnValue);
      
      // execute

      
      // Expect

      // Teardown
    });
  });
});
