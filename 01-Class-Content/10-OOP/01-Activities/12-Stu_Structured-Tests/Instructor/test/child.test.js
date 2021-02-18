const Child = require("../child");

// describes the test suite
describe("Child", () => {
    // describes the test group
    describe("Initialization", () => {
        // * If `name` is not a string or `name` is an empty string, an error is thrown.
        // This describes what we are testing and it usually includes the conditions as well
        it('if name is not a string, like -1, an error is thrown', () => {  
            // Setup - create variables for the object/inputs/expected return value
            // Execute - get the results by executing the function
            // Expect - compare the expected to the results (usually using like "expect")
            // Teardown
            expect( () => {
                new Child();
            }).toThrow();
        });
        // * If `name` is not a string or `name` is an empty string, an error is thrown.
        it('if name is an empty string, like "", an error is thrown', () => {
            expect( () => {
                new Child("");
            }).toThrow();
        });


        // * If `age` is not a number, is `NaN` or is less than `0`, an error is thrown.
        it('if age is not defined, an error is thrown', () => {
            expect( () => {
                new Child("Bob");
            }).toThrow();
        });
        it('if age is not a number, an error is thrown', () => {
            expect( () => {
                new Child("Bob", "B");
            }).toThrow();
        });
    
        // * Otherwise these values are added to the created instance when the constructor is called.
    });
});
