const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

// TODO: You will make six more routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. Save a note to the database's collection
// POST: /submit
// ===========================================
// title: $("#title").val(),
//       note: $("#note").val(),
//       created: Date.now()
app.post("/submit", (req, res)=> {
  db.notes.insert({
    title: req.body.title,
    note: req.body.note,
    created: req.body.created,
  }, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  })
})

// 2. Retrieve all notes from the database's collection
// GET: /all
// ====================================================
app.get("/all", (req, res) => {
  db.notes.find({}, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  });
});

// 3. Retrieve one note in the database's collection by it's ObjectId
// TIP: when searching by an id, the id needs to be passed in
// as (mongojs.ObjectId(IdYouWantToFind))
// GET: /find/:id
// ==================================================================
app.get("/find/:id", (req, res) => {
  db.notes.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  });
});

// 4. Update one note in the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// POST: /update/:id
// ================================================================

app.post("/update/:id", (req, res) => {
  db.notes.update({
    _id: mongojs.ObjectId(req.params.id)
  }, 
  {
    title: req.body.title,
    note: req.body.note
  }, 
  (err, data) => {
    if(err) {
      console.error(err);
      res.status(400);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  });
});

// 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
app.delete("/delete/:id", (req, res) => {
  db.notes.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  });
});

// 6. Clear the entire note collection
// DELETE: /clearall
// ===================================
app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500);
    }
    else{
      // console.log(data);
      res.json(data);
    }
  });
});


// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port http://localhost:3000 !");
});
