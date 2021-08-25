USE Pixar;
-- atividade 1 
SELECT m.title,  b.domestic_sales, b.international_sales FROM Movies AS m
	INNER JOIN BoxOffice AS b ON m.id = b.movie_id;
-- atividade 2
SELECT m.title,  b.domestic_sales, b.international_sales FROM Movies AS m
	INNER JOIN BoxOffice AS b ON m.id = b.movie_id WHERE b.international_sales > b.domestic_sales;
-- atividade 3 
SELECT m.title, b.rating FROM Movies AS m INNER JOIN BoxOffice AS b ON m.id = b.movie_id ORDER BY b.rating DESC;
-- atividade 4
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes FROM Theater t 
	LEFT JOIN Movies AS m ON t.id = m.theater_id ORDER BY t.name;
    
-- atividade 5

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes FROM Theater t 
	RIGHT JOIN Movies AS m ON t.id = m.theater_id ORDER BY t.name;

    
