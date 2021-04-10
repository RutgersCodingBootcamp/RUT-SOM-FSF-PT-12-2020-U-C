const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: String,
  title: String,
  plot: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
