create database myFirstDB;
use myFirstDB;
create table Employee(id int,EmpName varchar(85));
drop table employee;

use myFirstdB;
create table Employee(id bigint,userName varchar(200));

create database Ecommerce;
use Ecommerce;

create table products(
id bigint not null auto_increment primary key,
name varchar(255) not null,
category varchar(255) not null,
price bigint not null,
createAt datetime default now());

create table users(
id bigint not null auto_increment,
email varchar(255) not null,
password varchar(255) not null,
createdAt datetime default now(),
primary key(id));

create table orders(
id bigint not null auto_increment primary key,
productid bigint not null,
userid bigint not null,
quantity int not null,
createdAt datetime default now(),
payment bit default 0,
foreign key(userid) references users(id));

