DROP table if exists movie;

CREATE table movie (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    year INT NOT NULL,
    rank INT NOT NULL
);

INSERT INTO movie (name, type, year, rank) VALUES 
('Mulan', 'Animated', 1998, 10 ),
('Beauty And The Beast','Animated', 1991, 9),
('The Sandlot', 'Live', 1993, 8),
('Toy Story 2', 'Animated', 1999, 7),
('Mrs. Doubtfire', 'Live', 1993, 6),
('Jumanji', 'Live', 1995, 5),
('Aladdin', 'Animated', 1992, 4),
('Home Alone', 'Live', 1990, 3),
('The Lion King', 'Animated', 1994, 2),
('Toy Story', 'Animated', 1995, 1);