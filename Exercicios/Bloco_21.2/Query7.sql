USE Pixar;
SELECT * FROM Movies;
-- atividade 1 
SELECT m.title,  b.domestic_sales, b.international_sales FROM Movies AS m
	INNER JOIN BoxOffice AS b ON m.id = b.movie_id;
-- atividade 2
SELECT m.title,  b.domestic_sales, b.international_sales FROM Movies AS m
	INNER JOIN BoxOffice AS b ON m.id = b.movie_id WHERE b.international_sales > b.domestic_sales;