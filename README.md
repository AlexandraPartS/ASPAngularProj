# ASPAngular


### Task1
backend
1. [x]  backend - only base functions

1. [x]  DB Postgres
2. [X]  EmployeeController 

frontend
1. [x]  frontend - set & load

2. [x]  Menu
3. [x]  Table (data from DB)
4. [ ]  Bootstrap

5. [ ]  filter
6. [ ]  sorting
7. [x]  delete
8. [ ]  **models mapping**
9. [ ]  modal create - state: POST error
10. [ ]  modal edit - state: PUT error
11. [ ]  modal delete

_________
_________
### Task2
**script**

1. [x]  выборки всех сотрудников

SELECT * FROM "Employees";

1. [x]  сотрудников у кого зп выше 10000

SELECT * FROM "Employees"<br/>
WHERE "Salary" > 10000;<br/>

1. [x]  удаления сотрудников старше 70 лет, 
 
DELETE FROM "Employees"<br/>
WHERE date_part('year', NOW()) - date_part('year', "Birthday") > 70;<br/>
SELECT * FROM "Employees";

1. [x]  обновить зп до 15000  тем сотрудникам, у которых она меньше.

UPDATE "Employees"<br/>
SET "Salary" = 15000<br/>
WHERE "Salary" < 10000;<br/>