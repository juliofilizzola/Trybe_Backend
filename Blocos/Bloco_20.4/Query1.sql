USE sakila;

SELECT * FROM actor;
INSERT INTO actor (first_name, last_name)
VALUES('Julio','Filizzola');

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;
    
SELECT * FROM actor;