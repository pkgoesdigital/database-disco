--  a local hospital in town. SmallTown Hospital has a lot of information to store about their doctors, 
-- patients, illnesses, and treatments, and is hoping you can help them out!!

-- (40 points) I will not be specifying specific table structures for this project. 
-- Instead I will give general guidelines that you will need to use to develop the correct tables in Postgres, 
-- and Labels/Relationships in Neo4j:
-- A Doctor has a name and sees many Patients
-- A Patient has a name and can have many Illnesses. A Doctor can be a Patient, but cannot see themselves!
-- An Illness has a name
-- A Patient can receive many Treatments
-- A Treatment has a name

-- creates database
createdb smltownhospital

-- creates doctor table
CREATE TABLE doctor (
d_id SERIAL PRIMARY KEY,
d_firstName TEXT NOT NULL,
d_lastName TEXT NOT NULL,
d_contactNo TEXT NOT NULL,
CONSTRAINT uniqueContactNoNeeded UNIQUE (d_contactNo)
);

INSERT INTO doctor (d_firstName, d_lastName, d_contactNo)
VALUES ('Meredith','Gray','895-988-8873'),('Derek','Shepard','849-937-8773'),('Alex','Karev','398-846-3736');

-- creates patient table
-- need to account for doctor_id != patient_id
CREATE TABLE patient
(
    p_id SERIAL PRIMARY KEY,
    p_firstName TEXT NOT NULL,
    p_lastName TEXT NOT NULL,
    p_contactNo TEXT NOT NULL,
    p_DOB VARCHAR (10),
    p_gender TEXT,
    p_alcohol TEXT,
    p_smoking TEXT,
    p_exercise TEXT,
    CONSTRAINT uniqueContactNoPatient UNIQUE (p_contactNo)
);

INSERT INTO patient (p_firstName, p_lastName, p_contactNo, p_DOB, p_gender)
VALUES ('Sarah','Edwards','111-111-1111','08-12-1992','f'),('James','Edinburgh','111-111-2211','03-23-1993','m');

CREATE TABLE doctor_patient
(
    relation SERIAL PRIMARY KEY,
    p_id integer REFERENCES patient NOT NULL,
    d_id integer REFERENCES doctor NOT NULL,
    CONSTRAINT eachPatientMayOnlyHaveOneDoctor UNIQUE (p_id)
);

CREATE INDEX doctor_patient_p_id ON doctor_patient (p_id);
CREATE INDEX doctor_patient_d_id ON doctor_patient (d_id);

INSERT INTO doctor_patient(p_id, d_id)
VALUES (2,1),(1,2);

-- UPDATE doctor_patient
-- SET p_id = 2
-- WHERE d_id = 1;

-- creates illnesses table
CREATE TABLE illness
(
    i_id SERIAL PRIMARY KEY,
    i_name TEXT NOT NULL,
    description TEXT NOT NULL,
    CONSTRAINT eachIllnessHasOnlyOneID UNIQUE(i_id),
    CONSTRAINT eachIllnessHasOnlyOneName UNIQUE(i_name)
);

INSERT INTO illness(i_name, description)
VALUES ('flu','achy, fever, sore throat, vomiting'),('cold','low-energy, congestion'),('appendicitis','pain in abdomen, vomiting');

-- patient may have many illnesses, and an illness may be diagnosed to many patients
CREATE TABLE patient_illness
(
    relation SERIAL PRIMARY KEY,
    p_id integer REFERENCES patient NOT NULL,
    i_id integer REFERENCES illness NOT NULL
);

-- patient 1 has appendicitis and a cold
INSERT INTO patient_illness(p_id, i_id)
VALUES('1','3'),('1','2'),('2','1');

-- treatment table
CREATE TABLE treatment
(
    t_id SERIAL PRIMARY KEY,
    i_id SERIAL REFERENCES illness,
    description TEXT NOT NULL
);

INSERT INTO treatment(i_id, description)
VALUES('1','patient prescribed rest, fluids, antibiotics, sore throat lozenges');

INSERT INTO treatment(i_id, description)
VALUES('2','patient prescribed rest, fluids');

INSERT INTO treatment(i_id, description)
VALUES('3','patient reffered to ER for surgery');

-- used to check data was inserted into DB
SELECT *
FROM illness;
SELECT *
FROM treatment;
SELECT *
FROM patient;
SELECT *
FROM doctor;
SELECT *
FROM doctor_patient;

