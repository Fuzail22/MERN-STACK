/*Write a query to get all the products from the products table and 
the products should be group by category and the products should 
be sorted based on the price in ascending order*/
SELECT name,category,createAt, count(id) as Total_ids,sum(price) as Total_price FROM ecommerce.products
group by category
order by price desc;

/*Write a query to get the costliest Mobile phone from the product table*/
select * from products
where category="MobilePhone" and price=(select MAX(price) from products where category="MobilePhone");

/*for getting max price in each category*/
select category,MAX(price) as Maxprice from products  group by category;

/*JOINS*/
/*Write a query to get all the products and their details, user email 
which are added in the cart (using joins)*/
select p.name,u.email,p.category,o.quantity from (ecommerce.orders as o
 inner join ecommerce.users as u on o.userid=u.id
 inner join ecommerce.products as p on p.id=o.productid); 
 
 /*Write a query to get the user and total price who has added the 
product which total cost is highest of all of them (using joins and sub 
query).*/
select u.email,p.name,(p.price*o.quantity) as total_purchase from ecommerce.users as u
join ecommerce.orders as o on u.id=o.userid
join ecommerce.products as p on o.productid=p.id;
-- group by u.email);

 /*Write a query to get the user and total price who has added the 
products which total cost is highest of all of them (using joins and sub 
query).*/
select email,max(total_purchase) from (select u.email,sum(p.price*o.quantity) as total_purchase from ecommerce.users as u
join ecommerce.orders as o on u.id=o.userid
join ecommerce.products as p on o.productid=p.id
group by u.email) as T;

/*Write a query to get the count of products in all the category and 
the result should be sorted by count in the ascending order. (use 
Aggregate function)*/
select products.category,count(products.id) as count
from products
group by category
order by count;

/*Task is to write a query to check the email and password in the user 
table and give custom message based on the below condition*/
SELECT 
CASE 
	WHEN email is not null and email ="amitabh@gmail.com" and password = "amitabh@123"
    THEN "Logged in successfully"
    WHEN email is not null and email ="amitabh@gmail.com" and password != "amitaabh@123"
    THEN "incorrect password"
-- 	WHEN email is not null and email !="amitabh@gmail.com" 
--     THEN "incorrect password"
    ELSE "User not found" 
END as message
FROM users ;

SELECT email,
CASE 
	WHEN email is not null and email ="amitabh@gmail.com" and password = "amitabh@123"
    THEN "Logged in successfully"
    WHEN email is not null and email ="amitabh@gmail.com" and password != "amitaabh@123"
    THEN "incorrect password"
-- 	WHEN email is not null and email !="amitabh@gmail.com" 
--     THEN "incorrect password"
    ELSE "User not found" 
END as message
FROM users ;

SELECT IF((SELECT email FROM users WHERE email = "amitabh@gmail.com" AND password ="amitabh@123") IS NULL, 
"Incorrect password", "Logged in successfully") as result;

SELECT IF((SELECT email FROM users WHERE email ="amitabh@gmail.com") IS NULL, "User not found", "User found") as result;