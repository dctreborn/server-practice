CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes(
	id int(10) auto_increment not null,
	wish varchar(140) not null,
	primary key (id)
);