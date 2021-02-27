-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER auto_increment NOT NULL,
  -- Create a string column called "language" --
  language VARCHAR(30),
  -- Create an integer column called "rating" --
  rating INTEGER,
  -- Create a boolean column called "mastered" which will automatically fill --
  mastered BOOLEAN DEFAULT true,
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);

CREATE TABLE blog(
  blog_id INTEGER auto_increment NOT NULL,
  
  language_id INTEGER NOT NULL COMMENT "same as programming_languages.id",
  website VARCHAR(50),
  
  PRIMARY KEY(blog_id)
);

INSERT blog(language_id, website) VALUES (1, "https://2ality.com/");
INSERT blog(language_id, website) VALUES (1, "https://davidwalsh.name/");
INSERT blog(language_id, website) VALUES (4, "http://yaronschoen.com/");

SELECT * FROM blog;

SELECT * /*, CONCAT("<a href='", website, "'>", a.language ,"</a>") AS JSCODE */ 
FROM programming_languages a 
JOIN blog b 
ON (a.id = b.language_id);

-- Create new example rows
INSERT programming_languages (language, rating)
VALUES ("Javascript", 10);

INSERT programming_languages (language, rating)
VALUES ("Python", 9);

INSERT programming_languages (language, rating)
VALUES ("HTML", 9), ("CSS", 10);


SELECT * FROM programming_languages;
SELECT language AS `Alias` FROM programming_languages;

