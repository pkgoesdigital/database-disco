/*Alter the venues table such that it contains a
Boolean column called active with a default value of TRUE*/

ALTER TABLE venues
ADD COLUMN active BOOLEAN DEFAULT 'TRUE';
