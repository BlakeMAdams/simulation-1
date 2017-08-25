CREATE TABLE products
(id SERIAL PRIMARY KEY, 
shelf TEXT,
bin INTEGER,
name TEXT,
price FLOAT);

INSERT INTO products
(shelf, bin, name, price)
VALUES
('a',1,'hammer', 5.50),
('a',2,'hammer', 5.50),
('a',3,'hammer', 5.50),
('a',4,'hammer', 5.50),
('a',5,'hammer', 5.50),

('b',1,'bammer', 5.50),
('b',2,'bammer', 5.50),
('b',3,'bammer', 5.50),
('b',4,'bammer', 5.50),
('b',5,'bammer', 5.50),

('c',1,'cammer', 5.50),
('c',2,'cammer', 5.50),
('c',3,'cammer', 5.50),
('c',4,'cammer', 5.50),
('c',5,'cammer', 5.50),

('d',1,'dammer', 5.50),
('d',2,'dammer', 5.50),
('d',3,'dammer', 5.50),
('d',4,'dammer', 5.50),
('d',5,'dammer', 5.50);