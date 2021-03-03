DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
	--  1. id
    id INTEGER auto_increment NOT NULL,
	--  2. title
    title VARCHAR(100) NOT NULL,
	--  3. artist
    artist VARCHAR(100) NULL,
	--  4. genre
    genre VARCHAR(100) NULL,
    PRIMARY KEY(id)
);

INSERT songs (title, artist, genre)
VALUES
("Purple Rain", "Artist Formerly Known as Prince", "Pop"),
("Kick Push", "Lupe Fiasco", "Hiphop");
INSERT songs (title, artist, genre)
VALUES
("Crap", "Garbage", "Metal"),
("Poo", "Trash", "Metal");

SELECT * FROM songs;
SELECT * FROM songs WHERE genre = "Pop";
SELECT * FROM songs WHERE "Purple Rain" IN (artist, title, genre);

-- SELECT * FROM songs WHERE title = "Crap" OR title = "Poo";
DELETE FROM songs WHERE title = "Crap" OR title = "Poo";
