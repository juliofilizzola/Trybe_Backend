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