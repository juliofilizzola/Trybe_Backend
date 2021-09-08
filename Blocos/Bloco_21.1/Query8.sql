USE sakila;

SELECT rating, AVG(rental_duration) as 'media_duracao' FROM film
	GROUP BY rating
	ORDER BY media_duracao DESC