CREATE DATABASE pg_practice;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password VARCHAR(25)
);