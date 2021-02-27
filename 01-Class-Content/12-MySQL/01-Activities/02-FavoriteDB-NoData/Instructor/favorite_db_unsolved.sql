-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Make an numeric column called "score" -- 0.0111 - 2
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song VARCHAR(50) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(50), 
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER auto_increment,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(50) NOT NULL COMMENT "used for some query",
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN,
  -- Make an integer column called "score" --
  score INTEGER,
  -- Set the primary key of the table to id --
  PRIMARY KEY(id)
);
