var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlist_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    queryRockSongs();
  });

  const queryAllSongs = () => {
    connection.query('SELECT title, artist As artist_name, genre FROM songs', (err, res) => {
        if (err) throw err;
        console.log(res);
        res.forEach(({ id, title, artist, genre }) => {
            console.log(`${id} | ${title} | ${artist} | ${genre}`);
        })
        // connection.end();
    })
  }

  const queryRockSongs = () => {
    connection.query('SELECT * FROM songs WHERE genre=?', ['Rock'], (err, res) => {
        if (err) throw err;
        // console.log(res);
        res.forEach(({ id, title, artist, genre }) => {
            console.log(`${id} | ${title} | ${artist} | ${genre}`);
        })
        connection.end();
    })
  }