USE Pixar;

INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
		('Procurando Nemo', 'John Lasset', 2003, 107),
        ('Os Incriveis', 'Brad Bird', 2004, 116),
        ('WALL-E',' Pete Docter', 2008, 104);
        
SELECT * FROM Movies;
SELECT * FROM BoxOffice;

INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES(9, 6.8, 450000000, 370000000);
SELECT * FROM BoxOffice;

UPDATE Movies
SET director = 'Andrew Staton'
WHERE director = 'John Lasseter';
SELECT * FROM Movies;