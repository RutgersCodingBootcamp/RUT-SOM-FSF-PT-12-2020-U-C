DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
--  1. id
	id INTEGER auto_increment NOT NULL,
--  2. title
	title VARCHAR(100) NOT NULL,
--  3. artist
	artist VARCHAR(100),
--  4. genre
	genre VARCHAR(30),

	PRIMARY KEY(id)
);

INSERT songs (title, artist, genre) 
VALUES
("Black Bird", "The Beetles", "Classic Rock"),
("Freefall", "Tom Petty", "Classic Rock");

SELECT * FROM songs WHERE title = "Black Bird";
UPDATE songs 
SET artist = "The Beatles"
WHERE title = "Black Bird";