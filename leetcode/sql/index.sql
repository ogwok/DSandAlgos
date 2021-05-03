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
