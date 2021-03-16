DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
-- id, author, chirp, and time created.
	id INT auto_increment NOT NULL,
    author VARCHAR(100) NOT NULL,
    body VARCHAR(50) NOT NULL,
    -- fill in with the current time
    created_at DATETIME DEFAULT current_timestamp,
    PRIMARY KEY(id)
);


SELECT * FROM chirps;