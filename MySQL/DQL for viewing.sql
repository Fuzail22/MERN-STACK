 /*Write a query to get the user and total price who has added the 
products which total cost is highest of all of them (using joins and sub 
query).*/
select * from ecommerce.users as u
join ecommerce.orders as o on u.id=o.userid
join ecommerce.products as p on o.productid=p.id;

select u.email,sum(p.price*o.quantity) as total_purchase from ecommerce.users as u
join ecommerce.orders as o on u.id=o.userid
join ecommerce.products as p on o.productid=p.id;
-- group by u.email;

-- wrong query
/* select p.price*o.quantity as total_purchase,p.name from ecommerce.products as p
inner join ecommerce.orders as o on o.id =p.id;*/