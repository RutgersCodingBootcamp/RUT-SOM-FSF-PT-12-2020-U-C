
SELECT * FROM top1000songs;

SELECT * FROM top_albums;

SELECT * FROM top_songs;

-- approximation query to match an album with a song
SELECT * FROM top_albums a JOIN top_songs b 
-- we only match the row when the artist is the same and the year is the same
ON a.artist = b.artist AND a.year = b.year;
