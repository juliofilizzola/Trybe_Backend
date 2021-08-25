USE sakila;

(SELECT first_name, last_name FROM staff)
UNION ALL
(SELECT first_name, last_name FROM actor);