
SELECT concat('This is SQL Exercise,', 'Practice and Solution');
Select 1 as firt_column, 2 as second_column, 3 as thirth_column;
select 10 + 15;
select 10 * 5;

USE Scientists;

select name from Scientists;

select Name 'Nome do projeto', Hours 'Tempo de Trabalho' from Projects;

select name from Scientists order by name;

Select * from Projects order by Name desc;

select concat ('O projeto ', Name,' precisou de ', Hours, ' horas para ser concluído.') from Projects;

select * from Projects order by Hours desc;

select * from Projects order by Hours desc Limit 3;

SELECT distinct Project FROM Scientists.AssignedTo;
