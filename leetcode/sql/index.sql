-- 1757. Recyclable and Low Fat Products
SELECT product_id FROM Products WHERE low_fats = "Y" AND recyclable = "Y"

-- 584. Find Customer Referee
SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL

-- 595. Big Countries
SELECT name, population, area FROM World WHERE population >= 25000000 OR area >= 3000000 

-- 1148. Article Views I
SELECT DISTINCT author_id AS id FROM Views WHERE viewer_id = author_id ORDER BY id ASC

-- 1683. Invalid Tweets
SELECT tweet_id FROM Tweets WHERE length(content)>15

-- 1378. Replace Employee ID With The Unique Identifier
SELECT u.unique_id, e.name FROM EmployeeUNI u RIGHT JOIN Employees e ON u.id = e.id

-- 1068. Product Sales Analysis I
SELECT p.product_name, s.year, s.price FROM Sales s LEFT JOIN Product p on s.product_id = p.product_id

-- 1581. Customer Who Visited but Did Not Make Any Transactions
SELECT v.customer_id, COUNT(*) count_no_trans
FROM Visits v LEFT JOIN Transactions t 
ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id
