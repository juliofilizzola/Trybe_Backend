USE sakila;
-- exemplo 1
(SELECT first_name, last_name FROM staff)
UNION ALL
(SELECT first_name, last_name FROM actor);
-- exemplo 2
(SELECT first_name FROM customer WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name FROM actor WHERE first_name LIKE '%je%');
-- exemplo 3

(SELECT first_name FROM actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM staff LIMIT 1)
UNION
(SELECT first_name FROM customer LIMIT 5 OFFSET 15)
ORDER BY first_name;