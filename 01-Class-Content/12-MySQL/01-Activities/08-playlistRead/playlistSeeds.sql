DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NULL,
    artist VARCHAR(100) NULL,
    genre VARCHAR(50),
    PRIMARY KEY (id)
) 

INSERT INTO songs (title, artist, genre)
VALUES ("In the End","Linkin Park","Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine","The Beatles","Classic Rock");
