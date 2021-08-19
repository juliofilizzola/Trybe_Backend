USE Scientists;

SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existe ', COUNT(Name), ' cientistas na tablea Scientists.') FROM Scientists;