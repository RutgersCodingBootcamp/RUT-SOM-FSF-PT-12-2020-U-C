-- database greatbay_db
-- below line used only for debugging
DROP DATABASE IF EXISTS greatbay_db;
CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE memorabilia (
	-- id allows us to easily identify our row
    id INTEGER auto_increment NOT NULL,
	-- name of an auction
    name VARCHAR(100) NOT NULL,
	-- current bid
    bid INTEGER NOT NULL,
    
    PRIMARY KEY(id)
);
INSERT memorabilia(name, bid)
VALUES ("kidney", 1);
SELECT * FROM memorabilia;
-- baseball card, 50
