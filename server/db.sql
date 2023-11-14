CREATE DATABASE doggoclient;

CREATE TABLE client (
    client_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    pup_name VARCHAR(250),
    pup_weight_lbs INT,
    phone_number VARCHAR(15),
    appointment DATE
);

INSERT INTO client (first_name, last_name, pup_name , pup_weight_lbs, phone_number, appointment) 
VALUES ('Romina', 'Robles','Han Solo', 14 , '2393517418', '2023-10-06');