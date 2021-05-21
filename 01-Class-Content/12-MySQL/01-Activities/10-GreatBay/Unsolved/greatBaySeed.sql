DROP DATABASE IF EXISTS greatbay2_db;
CREATE DATABASE greatbay2_db;

USE greatbay2_db;

CREATE TABLE memorabilia(
	id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(100) NOT NULL,
    bid INTEGER default 0,
    PRIMARY KEY (id)
);

INSERT memorabilia(item_name, bid)
VALUES ("kidney", 1);

SELECT * FROM memorabilia;