USE sakila;
-- exemplo 1
SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;