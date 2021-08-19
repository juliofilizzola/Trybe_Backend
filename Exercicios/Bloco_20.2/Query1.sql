USE sakila;
SELECT title, description, release_year FROM film;
SELECT CONCAT (first_name, ' ', last_name) AS 'Nome Completo' from actor;
SELECT CONCAT (title, ' ', release_year) as 'Lançamento de Filme' FROM film;
Select concat (title, ' ', rating) as 'Classificação' from film;
select concat (address, '', district) as 'Endereço' from address;