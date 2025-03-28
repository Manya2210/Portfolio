CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE contacts (
  id int AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255),
  surname VARCHAR(255),
  phone VARCHAR(20)UNIQUE,
  email VARCHAR(255)UNIQUE
);
USE portfolio;
