const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  number: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    // /./ => means any character will match
    // /.+/ => need at least 1 of any character
    // /@/ => @
    // /.+@/ => stuff@
    // /.+@.+/ => stuff@stuff
    // /.+@.+\./ => stuff@stuff.
    // /.+@.+\..+/ => stuff@stuff.com
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now
  },

  longstring: {
    type: String,
    validate: [
      // left side is a true/false function, right side is the error when it is false
      ({ length }) => length >= 6, "Longstring should be longer.",
      ({ length }) => length < 256, "Your string is too long."
    ]
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;