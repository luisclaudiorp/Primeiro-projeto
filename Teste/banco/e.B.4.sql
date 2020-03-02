-- Faça uma querie que traga todos os posts com seus respectivos comments.

SELECT * FROM  posts p, comentarios c
WHERE p.id = c.posts_id