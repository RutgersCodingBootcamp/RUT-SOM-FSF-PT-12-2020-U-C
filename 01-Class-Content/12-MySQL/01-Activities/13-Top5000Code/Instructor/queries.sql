
SELECT * FROM top5000 WHERE artist = "Madonna";

-- * A query which returns all artists who appear within the 
-- top 5000 more than once

SELECT COUNT(*) FROM top5000 WHERE artist = "Madonna";

SELECT COUNT(*) AS `number`, artist 
FROM top5000 
GROUP BY artist 
HAVING COUNT(*) > 1 
ORDER BY `number` DESC;



--    * A query which returns all data contained within a specific range
--  * A query which searches for a specific song in the top 5000 and returns the data for it
  
  