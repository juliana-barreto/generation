-- Remove o banco de dados se ele já existir para evitar erros de execução
DROP DATABASE IF EXISTS rh_system;

-- Cria o banco de dados
CREATE DATABASE rh_system;

-- Seleciona o banco de dados
USE rh_system;

-- Cria a tabela de funcionários com restrições robustas
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL, 
    position VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL CHECK (salary > 0) 
);

-- Insere 5 registros iniciais na tabela
INSERT INTO employees (full_name, email, position, salary) VALUES
('Ana Silva', 'ana.silva@empresa.com', 'Backend Developer', 4500.00),
('Carlos Santos', 'carlos.santos@empresa.com', 'Intern', 1500.00),
('Beatriz Costa', 'beatriz.costa@empresa.com', 'HR Manager', 6000.00),
('Daniel Oliveira', 'daniel.oliveira@empresa.com', 'Administrative Assistant', 1800.00),
('Elena Pereira', 'elena.pereira@empresa.com', 'Sales Representative', 2500.00);

-- ----------------------------------------------------------------------------
-- QUERIES OBRIGATÓRIAS
-- ----------------------------------------------------------------------------

-- Seleciona todos os funcionários com salário maior que 2000
SELECT * FROM employees WHERE salary > 2000;

-- Seleciona todos os funcionários com salário menor que 2000
SELECT * FROM employees WHERE salary < 2000;

-- Atualiza um registro na tabela (dando ao Carlos uma promoção e aumento)
UPDATE employees 
SET salary = 2500.00, position = 'Junior Developer'
WHERE id = 2;

-- ----------------------------------------------------------------------------
-- QUERIES BÔNUS
-- ----------------------------------------------------------------------------

-- Seleciona todos os funcionários ordenados do maior salário para o menor
SELECT * FROM employees ORDER BY salary DESC;

-- Calcula a média salarial da empresa
SELECT AVG(salary) AS average_company_salary FROM employees;