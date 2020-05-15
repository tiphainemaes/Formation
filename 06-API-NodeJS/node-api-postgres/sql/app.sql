-- CREATE TABLE users (
--     id serial primary key, 
--     name varchar(30), 
--     username varchar(30), 
--     email VARCHAR(30),
--     address_street varchar(30), 
--     address_suite varchar(30), 
--     address_city varchar(30),
--     address_zip varchar(30),
--     address_geo_lat numeric,
--     address_geo_lng  numeric,
--     phone varchar(30),
--     website varchar(30),
--     company_name varchar(30),
--     company_catchphrase varchar(255),
--     company_bs varchar(255)
-- ) ;

-- CREATE TABLE posts (
--     user_id integer,
--     id serial primary key,
--     title VARCHAR(200),
--     body text
-- );

-- CREATE TABLE comments (
--     post_id integer,
--     id serial primary key,
--     name VARCHAR(200),
--     email VARCHAR(200),
--     body text
-- );
;

SELECT * from users;
SELECT * from posts;
SELECT * from comments;



