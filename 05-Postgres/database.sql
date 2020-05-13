-- 8. Peut-on savoir combien d'utilisateurs distincts ont loué chaque genre ?
 -- SELECT * FROM actor;
-- SELECT * FROM address;
-- SELECT * FROM category;
-- SELECT * FROM city;
-- SELECT * FROM country;
-- SELECT * FROM customer;
-- SELECT * FROM film;
-- SELECT * FROM film_actor;
-- SELECT * FROM film_category;
-- SELECT * FROM inventory;
-- SELECT * FROM language;
-- SELECT * FROM payment;
-- SELECT * FROM rental;
-- SELECT * FROM staff;
-- SELECT * FROM store;

SELECT category.name,
       SUM(payment.payment.amount) AS total_sales,
       SUM(payment_amount) / 16 AS moyenne
FROM payment
INNER JOIN rental ON payment.rental_id = rental.rental_id
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
INNER JOIN film_category ON inventory.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
GROUP BY category.name;


SELECT *
FROM category;


SELECT *
FROM film_category;


SELECT *
FROM payment;

