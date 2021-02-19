const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function() {};

// Find a tv show actor
TV.prototype.findActor = function(actor) {
  // console.log(actor);
  
  const URL = `http://api.tvmaze.com/search/people?q=${actor}`;
  
  // console.log(URL);
  return axios.get(URL).then(response => {
    // went far enough, now we can use deconstructor
    // console.log(response.data[0].person);

    const {name, birthday, gender, country, url} = response.data[0].person;

    //  * The actor's name
    // * The actor's birthday
    // * The actor's gender
    // * The actor's country
    // * The actor's TV Maze URL
    // console.log(country.name);
    let actorData = [
      `Name: ${name}`,
      `Birthday: ${birthday}`,
      `Gender: ${gender}`,
      `Country: ${country.name}`,
      `Maze Url: ${url}`
    ].join("\n\n");
    actorData += "\n\n-----------------\n\n";

    fs.appendFile("log.txt", actorData, err => {
      if (err) throw err;

      console.log(actorData);
    });
  });
}

// Find a tv show
TV.prototype.findShow = function(show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(response => {
    const showData = [
      "Show: " + response.data.name,
      "Genre(s): " + response.data.genres.join(", "),
      "Rating: " + response.data.rating.average,
      "Network: " + response.data.network.name,
      "Summary: " + response.data.summary,
      "-".repeat(60)
    ].join("\n\n");

    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
};

module.exports = TV;
