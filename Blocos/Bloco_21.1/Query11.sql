USE sakila;

SELECT rating, SUM(replacement_cost) SOMATORIA FROM sakila.film
    GROUP by rating
    HAVING SOMATORIA > 3950.50;