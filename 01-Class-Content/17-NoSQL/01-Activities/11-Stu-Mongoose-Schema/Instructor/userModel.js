const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  }, 
  // * username: A string that will be be required, and also trimmed.

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      ({ length }) => length >= 6, "password should be longer than 6 characters"
    ]
  },
  // * password: A string that will be required, trimmed, and at least 6 characters.
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // * email: A string that must be a valid email address and unique in our collection.

  userCreated: {
    type: Date,
    default: Date.now
  }
  // * userCreated: A date that will default to the current date.

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
