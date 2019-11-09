DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE TABLE Persons (
    id int NOT NULL AUTO_INCREMENT,
    user_password varchar(32),
    user_pin int(8),
    PRIMARY KEY (id)
);

