-- migrate:up
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- add default user
INSERT INTO
    users (first_name, last_name, email)
VALUES (
        'Eric',
        'Echemane',
        'eechemane29@gmail.com'
    );

-- migrate:down
DROP TABLE users