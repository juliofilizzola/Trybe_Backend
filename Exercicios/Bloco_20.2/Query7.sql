USE sakila;

select * from film;
## todos os filmes
select title, release_year, rating from film;
## filmes, ano de lançamento e também a classificação
select count(title) from film;
## quantos filmes