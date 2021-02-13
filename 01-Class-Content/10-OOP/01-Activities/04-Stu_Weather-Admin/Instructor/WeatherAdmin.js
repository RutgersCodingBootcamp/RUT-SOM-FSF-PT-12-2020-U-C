const fs = require("fs");
const UserSearch = require("./UserSearch.js");
const moment = require("moment");

const WeatherAdmin = function() {
  this.getData = () => {
    fs.readFile("log.txt", "utf8", (error, data) => {
      // console.log(`data: ${data}`);
      console.log(data);
      // console.log(error);
    });
  };

  this.newUserSearch = (name, location) => {
    const newUserSearch = new UserSearch(name, location);
    const logTxt =
      "\nName: " +
      newUserSearch.name +
      " Location: " +
      newUserSearch.location +
      " Date: " +
      moment(newUserSearch.date).format("MM-DD-YYYY");

      //fs.appendFile(path, data[, options], callback)
    fs.appendFile("log.txt",logTxt, "utf8",  err => {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin;
