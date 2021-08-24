USE sakila;
SELECT title, IF(rental_rate > 0.99 , 'Barato','Caro' ) as Valor FROM film; 