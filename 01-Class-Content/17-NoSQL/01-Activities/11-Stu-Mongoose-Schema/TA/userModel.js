const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: string,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: string,
    trim: true,
    required: "Password is Required", 
    validate: [
      ({ length }) => length >= 6, "password should be longer than 6 characters"
    ]
  }
  // * username: A string that will be be required, and also trimmed.

  // * password: A string that will be required, trimmed, and at least 6 characters.

  // * email: A string that must be a valid email address and unique in our collection.

  // * userCreated: A date that will default to the current date.
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
