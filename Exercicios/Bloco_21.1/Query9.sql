USE sakila;
SELECT district,  COUNT(*) as 'numero de endereços'FROM address GROUP BY district;