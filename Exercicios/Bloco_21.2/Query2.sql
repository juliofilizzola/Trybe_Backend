USE sakila;
-- exemplo 1
SELECT a.actor_id, a.first_name, f.film_id FROM actor AS a INNER JOIN film_actor AS f ON a.actor_id = f.actor_id;
-- exemplo 2
SELECT s.first_name, s.last_name, a.address FROM staff AS s INNER JOIN address AS a ON s.address_id = a.address_id;
-- exemplo 3
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address FROM customer AS c 
	INNER JOIN address AS a ON c.address_id = a.address_id LIMIT 100;
-- exemplo 4
SELECT c.first_name, c.email, c.address_id, a.address FROM customer AS c 
	INNER JOIN address AS a ON c.address_id = a.address_id WHERE c.first_name LIKE '%rene%';
-- exemplo 5
SELECT c.first_name, COUNT(a.address) AS numero FROM customer AS c 
	INNER JOIN address AS a ON c.address_id = a.address_id GROUP BY c.first_name;

