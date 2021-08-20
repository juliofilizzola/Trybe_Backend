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

DELETE FROM BoxOffice
	WHERE movie_id = 12;
DELETE FROM BoxOffice
	WHERE movie_id = 7;
DELETE FROM BoxOffice
	WHERE movie_id = 8;
DELETE FROM Movies
	WHERE length_minutes < 100;

SELECT * FROM Movies;
    
