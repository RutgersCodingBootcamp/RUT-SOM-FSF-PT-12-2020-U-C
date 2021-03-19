// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
const { Op } = require("sequelize");

// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({})
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    const title = req.params.book;
    Book.findAll({
      where: {
        title: title
      }
    })
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    const genre = req.params.genre;
    Book.findAll({
      where: {
        genre: genre
      }
    })
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    const author = req.params.author;
    Book.findAll({
      
      where: {
        author: author
      }
    })
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    const title = req.params.book;
    Book.findAll({
      where: {
        pages: {
          [Op.gt]: 150
        }
      }
    })
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    const title = req.params.book;
    Book.findAll({
      where: {
        pages: {
          [Op.lte]: 150
        }
      }
    })
    .then( result => {
      console.log(result);
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    const book = req.body;
    Book.create(book)
    .then( result => {
      console.log(result.dataValues);
      res.json(result.dataValues);
    })
    .catch( error => {
      console.log(error);
      res.status(400);
    });
  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", function(req, res) {
    const id = req.params.id;
    Book.destroy({
      where: {
        id: id
      }
    })
    .then( result => {
      res.json(result);
    })
    .catch( error => {
      console.log(error);
      res.status(500);
    });
  });

};
