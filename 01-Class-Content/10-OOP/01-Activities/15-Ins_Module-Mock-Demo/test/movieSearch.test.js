const axios = require("axios");
const MovieSearch = require("../movieSearch");

jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      //Setup
      const movie = new MovieSearch();
      const name = "Rocky";

      // execute - building the url
      const url = movie.buildUrl(name);

      // expected value of the url
      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      // Setup
      const movie = new MovieSearch();
      const name = "Rocky";
      // Setup - mock is being created here
      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      // execute
      // movie.search(name);
      // I don't know why this is here, this should always be true
      // just to explain that mock always returns this value
      // execute/expect
      expect(movie.search(name)).resolves.toEqual({ data: {} });

      // expect
      // https://www.omdbapi.com/?t=Rocky&apikey=trilogy
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
