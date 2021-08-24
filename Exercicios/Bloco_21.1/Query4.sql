USE sakila;
-- atividade 1
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assistt a esse filme ','Não conheço o filme' ) 'conheço o filme?' FROM film;


-- atividade 2 case
SELECT film_id, title,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
		ELSE 'Não classificado'
	END AS CLASSIFICAÇÃO FROM film LIMIT 10;  