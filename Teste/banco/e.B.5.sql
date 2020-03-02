-- Faça uma querie que traga todos os posts com sua quantidade de comments.

SELECT text,
    COUNT(posts_id) AS Qtd
    FROM posts p, comentarios c
    WHERE p.id = c.posts_id
GROUP BY text