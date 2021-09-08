USE sakila;

SELECT F.title, F.language_id, L.name FROM film AS F INNER JOIN language AS L ON F.language_id = L.language_id;