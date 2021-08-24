USE sakila;
SELECT active, COUNT(*) FROM customer GROUP BY active;