const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  books: [ // an array or list
    { // an object
      // type specifies the type of data
      type: Schema.Types.ObjectId,
      // referenced Model name
      ref: "Book"
    }
  ]
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
