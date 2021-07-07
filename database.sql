create TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(32),
    content VARCHAR(255),
    author VARCHAR(32),
    created_at TIMESTAMP DEFAULT Now()
);