USE Pixar;

DELETE FROM BoxOffice
	WHERE movie_id = 1;
    
DELETE FROM BoxOffice
	WHERE movie_id = 2;
    
DELETE FROM BoxOffice
	WHERE movie_id = 5;
    
DELETE FROM BoxOffice
	WHERE movie_id = 6;
    
SELECT * FROM BoxOffice;

DELETE FROM Movies
	WHERE director = 'Andrew Staton';

SELECT * FROM Movies;
    