const TV = require("../tv");
const axios = require("axios");

jest.mock("axios");

describe("TV", () => {
    describe("findActor", () => {
        it("should put actor in the url for the axios.get", () => {
            //S
            let inputActor = "Ernesto Blank";
            let tv = new TV();

            axios.get.mockReturnValue(new Promise(function(resolve) {
                resolve({name: "Ernesto Black"});
            }));
            
            //E
            let results = tv.findActor(inputActor);

            //E
            // using resolve to check the promise response
            expect(results).resolves.toEqual({name: "Ernesto Black"});

            expect(axios.get).lastCalledWith(`http://api.tvmaze.com/search/people?q=${inputActor}`);
            //T
        });
    });
});
