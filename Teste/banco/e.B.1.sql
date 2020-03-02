--Crie um script de criação das tabelas.

-- Tabela POSTS

CREATE TABLE IF NOT EXISTS posts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    text VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (id)
);

-- TABELAS COMMENTS

CREATE TABLE IF NOT EXISTS comments ( 
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    posts_id INT UNSIGNED NOT NULL,
    message VARCHAR(255) NOT NULL,
    author VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(id),
    UNIQUE KEY(id),
    FOREIGN KEY(posts_id) REFERENCES posts (id)
);