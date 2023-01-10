-- Active: 1673150891911@@127.0.0.1@5432@shope

CREATE Table users(
    id VARCHAR PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
);

CREATE TABLE category(
    id VARCHAR PRIMARY KEY,
    name VARCHAR(20)
);


CREATE Table product(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    price INT,
    categoryId VARCHAR,
    Foreign Key (categoryId) REFERENCES category(id)
);