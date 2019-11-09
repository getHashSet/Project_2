DROP DATABASE IF EXISTS nextStepResume_db;
CREATE DATABASE nextStepResume_db;

CREATE TABLE user_table (
    id int NOT NULL AUTO_INCREMENT,
    user_password varchar(32),
    user_pin int(8),
    PRIMARY KEY (id)
);

