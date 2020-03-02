-- Faça um script para popular as tabelas.

INSERT INTO posts
    (author, title, text, created_at, updated_at)
VALUES
    ('Sun Tzu', 'Arte da Guerra', 'A obra funciona como um manual estratégico para conflitos armados, mas que pode ter várias aplicações em outras áreas da vida.', NOW (), NOW()),
    ('Sun Tzu', 'Arte da Guerra', 'A obra funciona como um manual estratégico para conflitos armados, mas que pode ter várias aplicações em outras áreas da vida.', NOW (), NOW()),
    ('Jane Austen', 'Orgulho e Preconceito', 'Vemos no romance como as relações movidas por amor e dinheiro podem ser promíscuas e mesquinhas, encobertas pelo véu da sociedade burguesa.', NOW (), NOW());
