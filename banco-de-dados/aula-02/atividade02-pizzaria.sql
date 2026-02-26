-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS db_pizzaria_legal;

-- Seleciona o banco para uso
USE db_pizzaria_legal;

-- Tabela de Categorias 
CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,        
    tipo_massa VARCHAR(50) NOT NULL,  
    tamanho_padrao VARCHAR(30)        
);

-- Tabela de Pizzas 
CREATE TABLE tb_pizzas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,              
    ingredientes VARCHAR(255) NOT NULL,      
    borda_recheada BOOLEAN DEFAULT FALSE,    
    valor DECIMAL(6, 2) NOT NULL,            
    categoria_id BIGINT NOT NULL,            
    CONSTRAINT fk_pizzas_categorias FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

-- Inserindo 5 registros na tabela de categorias
INSERT INTO tb_categorias (nome, tipo_massa, tamanho_padrao) VALUES
('Salgada Clássica', 'Massa Tradicional', 'Grande'),
('Salgada Especial', 'Massa Pan', 'Família'),
('Doce', 'Massa Fina', 'Brotinho'),
('Vegetariana', 'Massa Integral', 'Média'),
('Premium', 'Massa Artesanal', 'Grande');

-- Inserindo 8 registros na tabela de pizzas
INSERT INTO tb_pizzas (nome, ingredientes, borda_recheada, valor, categoria_id) VALUES
('Mussarela', 'Queijo mussarela e orégano', FALSE, 40.00, 1),             
('Margherita', 'Mussarela, tomate e manjericão', TRUE, 55.00, 4),         
('Calabresa', 'Calabresa fatiada e cebola', FALSE, 48.00, 1),             
('Chocolate com Morango', 'Chocolate ao leite e morangos frescos', TRUE, 65.00, 3), 
('Frango com Catupiry', 'Frango desfiado e queijo catupiry', TRUE, 85.00, 2),
('Romeu e Julieta', 'Goiabada e queijo minas', FALSE, 42.00, 3),         
('Pepperoni Trufado', 'Pepperoni, mussarela e azeite trufado', TRUE, 110.00, 5), 
('Milho e Bacon', 'Milho verde, bacon em cubos e mussarela', FALSE, 52.00, 1);   

-- -----------------------------------------------------
-- Queries Solicitadas
-- -----------------------------------------------------

-- SELECT que retorna todas as pizzas cujo valor seja maior do que R$ 45,00
SELECT nome AS 'Sabor da Pizza', valor AS 'Preço (R$)' 
FROM tb_pizzas 
WHERE valor > 45.00;

-- SELECT que retorna todas as pizzas cujo valor esteja no intervalo R$ 50,00 e R$ 100,00
SELECT nome AS 'Sabor da Pizza', valor AS 'Preço (R$)' 
FROM tb_pizzas 
WHERE valor BETWEEN 50.00 AND 100.00;

-- SELECT utilizando o operador LIKE, buscando todas as pizzas que possuam a letra M no atributo nome
SELECT nome AS 'Sabor da Pizza', ingredientes AS 'Ingredientes' 
FROM tb_pizzas 
WHERE nome LIKE '%m%';

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados de pizzas e categorias
SELECT 
    p.nome AS 'Sabor da Pizza', 
    p.valor AS 'Preço (R$)', 
    c.nome AS 'Categoria', 
    c.tipo_massa AS 'Tipo de Massa'
FROM tb_pizzas p
INNER JOIN tb_categorias c ON p.categoria_id = c.id;

-- SELECT utilizando INNER JOIN, trazendo apenas as pizzas que pertençam a uma categoria específica (Doce)
SELECT 
    p.nome AS 'Sabor da Pizza', 
    p.ingredientes AS 'Ingredientes', 
    p.valor AS 'Preço (R$)', 
    c.nome AS 'Categoria'
FROM tb_pizzas p
INNER JOIN tb_categorias c ON p.categoria_id = c.id
WHERE c.nome = 'Doce';

-- -----------------------------------------------------
-- Queries Bônus
-- -----------------------------------------------------

-- Quantidade de pizza por categoria, para saber qual cardápio tem mais variedade.
SELECT 
    c.nome AS 'Categoria', 
    COUNT(p.id) AS 'Total de Sabores'
FROM tb_pizzas p
INNER JOIN tb_categorias c ON p.categoria_id = c.id
GROUP BY c.nome
ORDER BY 'Total de Sabores' DESC;

-- Traz uma visão geral dos preços praticados no estabelecimento.
SELECT 
    ROUND(AVG(valor), 2) AS 'Preço Médio (R$)',
    MAX(valor) AS 'Pizza Mais Cara (R$)',
    MIN(valor) AS 'Pizza Mais Barata (R$)'
FROM tb_pizzas;

-- Simula um cenário onde a pizzaria dá 15% de desconto nas pizzas com borda recheada.
SELECT 
    nome AS 'Pizza', 
    borda_recheada AS 'Com Borda?',
    valor AS 'Preço Original (R$)', 
    ROUND((valor * 0.85), 2) AS 'Preço Promocional 15% OFF (R$)'
FROM tb_pizzas
WHERE borda_recheada = TRUE;
