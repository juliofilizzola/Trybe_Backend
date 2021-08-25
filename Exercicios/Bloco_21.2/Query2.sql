USE sakila;
select * from staff;
SELECT a.actor_id, a.first_name, f.film_id FROM actor AS a INNER JOIN film_actor AS f ON a.actor_id = f.actor_id;
SELECT s.first_name, s.last_name, a.address FROM staff AS s INNER JOIN address AS a ON s.address_id = a.address_id;
