
-- A cláusula IF NOT EXISTS evita erros caso o banco já tenha sido criado
CREATE DATABASE IF NOT EXISTS db_generation_game_online;

-- Seleciona o banco para uso
USE db_generation_game_online;

-- Criação da tabela de classes primeiro 
CREATE TABLE IF NOT EXISTS tb_classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_classe VARCHAR(50) NOT NULL,
    tipo_dano VARCHAR(30) NOT NULL, 
    descricao VARCHAR(255)         
);

-- Criação da tabela de personagens com a Chave Estrangeira
CREATE TABLE IF NOT EXISTS tb_personagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,          
    poder_ataque INT NOT NULL,           
    poder_defesa INT NOT NULL,           
    nivel INT DEFAULT 1,                 
    classe_id INT,                   
    FOREIGN KEY (classe_id) REFERENCES tb_classes(id)
);

-- Inserindo 5 registros na tabela de classes
INSERT INTO tb_classes (nome_classe, tipo_dano, descricao) VALUES
('Lutador', 'Físico', 'Combate corpo a corpo com equilíbrio entre dano e defesa.'),
('Mago', 'Mágico', 'Especialista em habilidades de dano mágico e controle.'),
('Atirador', 'Físico à Distância', 'Causa dano físico contínuo à distância.'),
('Assassino', 'Físico/Híbrido', 'Alta mobilidade e dano explosivo para eliminar alvos frágeis.'),
('Tanque', 'Defensivo', 'Alta resistência e controle de grupo para proteger aliados.');

-- Inserindo 8 registros na tabela de personagens 
INSERT INTO tb_personagens (nome, poder_ataque, poder_defesa, nivel, classe_id) VALUES
('Garen', 2500, 3000, 50, 1),     
('Ahri', 4000, 800, 60, 2),       
('Ashe', 2200, 1500, 45, 3),     
('Zed', 3500, 1200, 55, 4),     
('Braum', 1800, 4000, 50, 5),  
('Jinx', 2900, 1100, 40, 3),    
('Lux', 3800, 900, 65, 2),       
('Darius', 2800, 2500, 50, 1);       

-- -----------------------------------------------------
-- Queries Solicitadas
-- -----------------------------------------------------

-- SELECT que retorna todos os personagens cujo poder de ataque seja maior do que 2000
SELECT nome AS 'Personagem', poder_ataque AS 'Ataque', nivel AS 'Nível' 
FROM tb_personagens 
WHERE poder_ataque > 2000
ORDER BY poder_ataque DESC;

-- SELECT que retorna todos os personagens cujo poder de defesa esteja no intervalo 1000 e 2000
SELECT nome AS 'Personagem', poder_defesa AS 'Defesa' 
FROM tb_personagens 
WHERE poder_defesa BETWEEN 1000 AND 2000
ORDER BY poder_defesa ASC;

-- SELECT utilizando o operador LIKE, buscando todos os personagens que possuam a letra C no atributo nome
SELECT nome AS 'Personagem', nivel AS 'Nível' 
FROM tb_personagens 
WHERE nome LIKE '%c%';

-- SELECT utilizando a cláusula INNER JOIN para unir personagens e classes
SELECT 
    p.nome AS 'Personagem', 
    p.poder_ataque AS 'Ataque', 
    p.poder_defesa AS 'Defesa', 
    c.nome_classe AS 'Classe', 
    c.tipo_dano AS 'Tipo de Dano'
FROM tb_personagens p
INNER JOIN tb_classes c ON p.classe_id = c.id;

 -- SELECT utilizando a cláusula INNER JOIN filtrando apenas a classe dos Atiradores
SELECT 
    p.nome AS 'Personagem', 
    p.nivel AS 'Nível', 
    p.poder_ataque AS 'Ataque',
    c.nome_classe AS 'Classe'
FROM tb_personagens p
INNER JOIN tb_classes c ON p.classe_id = c.id
WHERE c.nome_classe = 'Atirador';

-- -----------------------------------------------------
-- Queries Bonus
-- -----------------------------------------------------

-- Mostra quantos personagens existem em cada classe. 
SELECT 
    c.nome_classe AS 'Classe', 
    COUNT(p.id) AS 'Total de Personagens'
FROM tb_personagens p
RIGHT JOIN tb_classes c ON p.classe_id = c.id
GROUP BY c.nome_classe;

-- Calcula a média de ataque de todos os personagens do servidor.
SELECT ROUND(AVG(poder_ataque), 2) AS 'Média de Ataque Global' 
FROM tb_personagens;

 -- Aumenta o ataque de todos os Lutadores em 10%.
UPDATE tb_personagens 
SET poder_ataque = poder_ataque * 1.10 
WHERE classe_id = (SELECT id FROM tb_classes WHERE nome_classe = 'Lutador');