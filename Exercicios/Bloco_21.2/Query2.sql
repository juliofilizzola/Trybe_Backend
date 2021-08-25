USE sakila;
SELECT a.actor_id, a.first_name, f.film_id FROM actor AS a INNER JOIN film_actor AS f ON a.actor_id = f.actor_id;
