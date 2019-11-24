/*Select all the tables we created today in class (and only those) from pg_class (a built-in table in PostgreSQL that contains metadata about all tables), and examine the table to get a sense of what kinds of metadata Postgres stores about tables*/

SELECT events,
FROM pg_class
WHERE  not in ('pg_class', 'information_schema');

SELECT * from my_tables;
