
DROP DATABASE IF EXISTS seinfield_db;
CREATE DATABASE seinfield_db;

USE seinfield_db;

CREATE TABLE actors(
	-- id number
    id INTEGER auto_increment NOT NULL,
	-- name string
    name VARCHAR(50) NOT NULL,
	-- coolness points number
    coolness_points INTEGER NOT NULL,
	-- attitude string
    attitude VARCHAR(12) NOT NULL,
    
    PRIMARY KEY(id)
);
SELECT * FROM actors;