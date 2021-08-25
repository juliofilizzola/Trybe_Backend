USE sakila;
SELECT * FROM film;
-- exemplo 1
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;
-- exemplo 2
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM film AS t1, film AS t2
WHERE t1.rental_duration = t2.rental_duration HAVING t1.rental_duration BETWEEN 2 AND 4;