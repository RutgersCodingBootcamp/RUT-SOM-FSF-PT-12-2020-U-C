CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000(
	id INTEGER auto_increment NOT NULL,
    position INTEGER,
    artist VARCHAR(150), 
    title VARCHAR(150),
    release_year INTEGER,
    albums_sold DECIMAL(6,3) COMMENT "in millions",
    revenue DECIMAL(6,3) COMMENT "in millions",
    radio_play DECIMAL(6,3) COMMENT "in millions",
    albums_sold_us DECIMAL(6,3) COMMENT "in millions",
    duration DECIMAL(4,3) COMMENT "in minutes",
    primary key(id)
);
