const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

const data = {
  array: ["Mango", "Fruit", "Peach"],
  boolean: false,
  string:
    "Peter told me to do this. \"Keep Coding\" - Peter",
  number: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
