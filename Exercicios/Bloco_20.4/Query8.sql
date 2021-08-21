USE Pixar;

UPDATE BoxOffice
	set rating = 9.0
    WHERE domestic_sales > 400000000;

SELECT * FROM BoxOffice;

UPDATE BoxOffice
	set rating = 6.0
    WHERE domestic_sales < 300000000;
    
SELECT * FROM Movies;


    
SELECT * FROM BoxOffice;
DELETE FROM pixar.boxoffice
WHERE movie_id IN (SELECT id FROM pixar.movies
WHERE length_minutes < 100);

DELETE FROM pixar.movies
WHERE length_minutes < 100;
SELECT * FROM Movies;
    
