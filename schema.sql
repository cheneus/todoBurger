create database burgers_db;
use burgers_db;

drop table if exists burgers;
create table burgers (
id int auto_increment,
burger_name varchar(32),
devoured boolean not null default 0,
date timestamp,
primary key (id)
)
select * from burgers;

UPDATE burgers SET devoured=1 WHERE id=1;

create database blogger;
