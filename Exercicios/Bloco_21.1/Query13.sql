USE hr;
-- atividade 1
SELECT MAX(SALARY) AS MAIOR_SALARIO FROM employees;
-- atividade 2
SELECT MAX(SALARY) - MIN(SALARY) AS DIFERENTE FROM employees;
-- atividade 3
SELECT  JOB_ID, AVG(SALARY) AS 'MEDIA_SALARIAL'
FROM employees
GROUP BY JOB_ID
ORDER BY `MEDIA_SALARIAL` DESC;
-- atividade 4
SELECT SUM(SALARY) FROM employees;
-- atividade 5
SELECT MAX(SALARY) AS MAIOR, MIN(SALARY) AS MINIMO, SUM(SALARY) AS SOMA_TOTAL, AVG(SALARY) AS MEDIA FROM employees;
-- atividade 6
SELECT JOB_ID, COUNT(*) AS TOTAL FROM employees WHERE JOB_ID = 'IT_PROG';
-- atividade 7
SELECT JOB_ID, SUM(SALARY) AS 'SOMA' FROM employees GROUP BY JOB_ID;
-- atividade 8
SELECT JOB_ID, SUM(SALARY) AS 'SOMA' FROM employees GROUP BY JOB_ID HAVING JOB_ID = 'TI_PROG';
-- atividade 9
SELECT JOB_ID, AVG(SALARY) AS AVEREGE FROM employees WHERE JOB_ID <> 'IT_PROG' GROUP BY JOB_ID ORDER BY `AVEREGE`;
-- atividade 10
SELECT DEPARTMENT_ID, AVG(SALARY) AS AVERAGE, COUNT(*) AS NUMBER FROM employees GROUP BY DEPARTMENT_ID;
-- atividade 11
SET SQL_SAFE_UPDATES = 0;
UPDATE employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, 515, 777) WHERE PHONE_NUMBER LIKE '515%';
-- atividade 12
SELECT * FROM employees WHERE LENGTH(FIRST_NAME) >= 8;
-- atividade 13
SELECT employee_id, first_name, YEAR(hire_date) 'ano' FROM employees;
-- atividade 14
SELECT employee_id, first_name, DAY(hire_date) 'dia de contrato' FROM employees;
-- atividade 15
SELECT employee_id, first_name, MONTH(hire_date) 'mes de contrato' FROM employees;
-- atividade 16
SELECT UCASE(first_name) AS 'PRIMEIRO NOME' FROM employees;
-- atividade 17
SELECT first_name as 'name' FROM employees WHERE hire_date BETWEEN '1987-07-01'  AND '1987-07-31';
