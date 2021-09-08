USE sakila;

DELIMITER $$ 

CREATE PROCEDURE ShowAverage(
IN film_name VARCHAR(300),
OUT media_aluguel_em_dias DOUBLE
)
BEGIN
	SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;