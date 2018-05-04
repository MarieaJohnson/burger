CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerType varchar(140) NOT NULL,
	PRIMARY KEY (id)
);