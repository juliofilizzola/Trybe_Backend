USE Pixar;
SELECT * FROM Movies;
-- atividade 1 
SELECT m.title, m.year, b.domestic_sales, b.international_sales FROM Movies AS m
	INNER JOIN BoxOffice AS b ON m.movie_id = b.movie_id;
