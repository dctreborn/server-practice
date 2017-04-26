CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (

  -- TABLE CODE TO GO HERE
  id integer(10) not null auto_increment,
  author varchar(255) not null,
  chirp varchar(140) not null,
  primary key(id),
  timeCreated timestamp

);