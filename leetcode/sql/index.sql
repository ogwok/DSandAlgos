-- 1757. Recyclable and Low Fat Products
SELECT product_id FROM Products WHERE low_fats = "Y" AND recyclable = "Y"

-- 584. Find Customer Referee
SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL

-- 595. Big Countries
SELECT name, population, area FROM World WHERE population >= 25000000 OR area >= 3000000 
