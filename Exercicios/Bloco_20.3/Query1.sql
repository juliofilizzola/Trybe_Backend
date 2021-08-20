USE sakila;
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer WHERE active = 0 ORDER BY first_name;
SELECT * FROM film WHERE rating = 'G';