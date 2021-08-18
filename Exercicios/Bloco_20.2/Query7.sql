USE sakila;

select * from film;
## todos os filmes
select title, release_year, rating from film;
## filmes, ano de lançamento e também a classificação
select count(title) from film;
## quantos filmes
select distinct last_name from actor;
## sobrenomes listados e não repetidos
select count(distinct last_name) from actor;
## numero de last name de atores
select last_name from actor
order by last_name desc;
## ordenando os last_name em ordem decrescente
select * from language limit 5 offset 1;
## mostrando 5 idiomas cadastrados menos o inglish
select title, release_year,rental_duration, replacement_cost from film
order by rental_duration;
## rie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição 