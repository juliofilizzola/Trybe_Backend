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
-- ativdade 7
SELECT JOB_ID, SUM(SALARY) AS 'SOMA' FROM employees GROUP BY JOB_ID;
-- ativdade 8
SELECT JOB_ID, SUM(SALARY) AS 'SOMA' FROM employees GROUP BY JOB_ID HAVING JOB_ID = 'TI_PROG';