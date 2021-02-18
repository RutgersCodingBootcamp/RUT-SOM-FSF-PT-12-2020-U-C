const Child = require("../child");

// describes the test suite
describe("Child", () => {
    // describes the test group
    describe("Initialization", () => {
        // * If `name` is not a string or `name` is an empty string, an error is thrown.
        // This describes what we are testing and it usually includes the conditions as well
        it('should throw an error, if name is not a string, like -1', () => {  
            // Setup - create variables for the object/inputs/expected return value
            // Execute - get the results by executing the function
            // Expect - compare the expected to the results (usually using like "expect")
            // Teardown - removes any files or reverses any changes to the system (usually not used)
            expect( () => {
                new Child();
            }).toThrow();
        });
        // * If `name` is not a string or `name` is an empty string, an error is thrown.
        it('should throw an error, if name is an empty string', () => {
            expect( () => {
                new Child("");
            }).toThrow();
        });


        // * If `age` is not a number, is `NaN` or is less than `0`, an error is thrown.
        it('should throw an error, if age is not defined', () => {
            expect( () => {
                new Child("Bob");
            }).toThrow();
        });
        it('should throw an error, if age is not a number', () => {
            expect( () => {
                new Child("Bob", "B");
            }).toThrow();
        });

        it('should have the values ("name" and "age") when we create the instance', () => {
            // Setup
            let inputName = "Bob";
            let inputAge = 11;
            let expectedName = "Bob";
            let expectedAge = 11;

            // Execute
            let results = new Child(inputName, inputAge);

            // Expect
            expect(results.name).toEqual(expectedName);
            expect(results.age).toEqual(expectedAge);

            // Teardown
        });
    
        // * Otherwise these values are added to the created instance when the constructor is called.
    });
});
