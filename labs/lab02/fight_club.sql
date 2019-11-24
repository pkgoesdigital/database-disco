/*Write a query that finds the country name of the Fight Club event*/

/*to view table information:*/
SELECT * FROM countries;
SELECT * FROM cities;
SELECT * FROM venues;
SELECT * FROM events;


SELECT
  e.title,
  c.country_name
FROM events e, countries c, venues v
WHERE e.venue_id = v.venue_id AND v.country_code = c.country_code;
