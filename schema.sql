create database school_api;
use school_api;

create table schools(
 id int primary key auto_increment,
 name varchar(255) not null,
 address varchar(500) not null,
 latitude FLOAT NOT NULL,
 longitude FLOAT NOT NULL
);
