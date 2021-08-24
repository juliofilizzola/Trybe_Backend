USE sakila;
-- atividade 1
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assistt a esse filme ','Não conheço o filme' ) 'conheço o filme?' FROM film;