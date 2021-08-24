USE sakila;
SELECT store_id, COUNT(*) as pessoas, IF(active = 0, 'Inativo', 'Ativo') AS 'ativo ou inativo' FROM sakila.customer GROUP BY store_id, active