USE sakila;
    SELECT rating, AVG(length) AS media
    FROM sakila.film
    GROUP BY rating
    HAVING media BETWEEN 115.0 AND 121.50;
    