USE sakila;
DELIMITER $$ 

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
	SELECT * FROM sakila.actor WHERE first_name LIKE concat('%', syllable, '%');
END $$

DELIMITER ;