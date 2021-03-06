
SELECT * FROM top5000 WHERE artist = "Madonna";

-- * A query which returns all artists who appear within the 
-- top 5000 more than once

SELECT COUNT(*) FROM top5000 WHERE artist = "Madonna";

SELECT COUNT(*) AS `number`, artist 
FROM top5000 
GROUP BY artist 
HAVING COUNT(*) > 1 
ORDER BY `number` DESC;

-- advanced search for ranges
SELECT * FROM top5000 WHERE position BETWEEN 10 AND 100;
SELECT * FROM top5000 WHERE release_year BETWEEN 2000 AND 2100;
-- pagination query - offset, rows
SELECT * FROM top5000 LIMIT 100,10;

-- general search - basic blogs, basic site searches
SELECT * FROM top5000 WHERE "Prince" IN (artist,title,release_year,position);
SELECT * FROM top5000 WHERE 2000 IN (artist,title,release_year,position);

-- advanced search - DBA write these for more advanced apps
SELECT * FROM top5000 WHERE release_year = 2000;
SELECT * FROM top5000 WHERE release_year IN (2000, 2001, 2011);

--    * A query which returns all data contained within a specific range
--  * A query which searches for a specific song in the top 5000 and returns the data for it
  
  