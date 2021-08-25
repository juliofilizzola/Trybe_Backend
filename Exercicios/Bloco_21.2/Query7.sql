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

-- atividade 6

SELECT m.title FROM Movies m INNER JOIN BoxOffice b ON b.movie_id = m.id;

-- ativdade 7

SELECT rating FROM BoxOffice WHERE movie_id IN(SELECT id FROM Movies WHERE year > 2009);