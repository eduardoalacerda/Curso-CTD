CREATE SCHEMA UniversoLeitura;

USE UniversoLeitura;

CREATE TABLE associados (
associados_id INT NOT NULL,
associados_rg VARCHAR(10),
associados_nome VARCHAR(50),
associados_sobrenome VARCHAR(50),
associados_endereco VARCHAR(150),
associados_cidade VARCHAR(50),
associados_estado VARCHAR(2),
PRIMARY KEY (associados_id)
);

CREATE TABLE editoras (
editora_id INT NOT NULL,
editora_razao_social VARCHAR(150),
editora_telefone VARCHAR(150),
PRIMARY KEY (editora_id)
);

CREATE TABLE autores (
autores_id INT NOT NULL,
autores_sobrenome VARCHAR(100),
autores_nome VARCHAR(100),
PRIMARY KEY (autores_id)
);

CREATE TABLE telefones (
telefone_id INT NOT NULL,
telefone_associado VARCHAR(100),
associado_id INT,
PRIMARY KEY (telefone_id),
CONSTRAINT FKassociado
FOREIGN KEY (associado_id)
REFERENCES universoleitura.associados(associados_id)
);

ALTER TABLE associados
CHANGE associados_id associado_id INT NOT NULL,
CHANGE associados_rg associado_rg VARCHAR(10),
CHANGE associados_nome associado_nome VARCHAR(50),
CHANGE associados_sobrenome associado_sobrenome VARCHAR(50),
CHANGE associados_endereco associado_endereco VARCHAR(150),
CHANGE associados_cidade associado_cidade VARCHAR(50),
CHANGE associados_estado associado_estado VARCHAR(2);

CREATE TABLE livros (
livros_id INT NOT NULL,
livros_ISBN VARCHAR(13),
livro_titulo VARCHAR(200),
livro_ano_criacao DATE,
autor_id INT,
livro_ano_publicacao DATE,
editora_id INT,
PRIMARY KEY (livros_id),
CONSTRAINT FKautor
FOREIGN KEY (autor_id)
REFERENCES universoleitura.autores(autores_id),
CONSTRAINT FKeditora
FOREIGN KEY (editora_id)
REFERENCES universoleitura.editoras(editora_id)
);

ALTER TABLE autores
CHANGE autores_id autor_id INT NOT NULL,
CHANGE autores_sobrenome autor_sobrenome VARCHAR(100),
CHANGE autores_nome autor_nome VARCHAR(100);

ALTER TABLE livros
CHANGE livros_id livro_id INT NOT NULL,
CHANGE livros_ISBN livro_ISBN VARCHAR(13);

CREATE TABLE emprestimos (
emprestimo_id INT NOT NULL,
associado_id INT,
emprestimo_data DATE,
emprestimo_prazo_devolucao DATE,
emprestimo_data_devolucao DATE,
PRIMARY KEY (emprestimo_id),
FOREIGN KEY (associado_id)
REFERENCES universoleitura.associados(associado_id)
);

ALTER TABLE emprestimos
DROP FOREIGN KEY emprestimos_ibfk_1;

ALTER TABLE emprestimos
ADD CONSTRAINT FKemprestimo_associado
FOREIGN KEY (associado_id)
REFERENCES universoleitura.associados(associado_id);

CREATE TABLE exemplares (
exemplar_id INT NOT NULL,
livro_id INT,
exemplar_sinistro BOOL,
PRIMARY KEY (exemplar_id),
CONSTRAINT FKlivro
FOREIGN KEY (livro_id)
REFERENCES universoleitura.livros(livro_id)
);

CREATE TABLE emprestimo_exemplares (
emprestimo_exemplar_id INT NOT NULL,
emprestimo_id INT,
exemplar_id INT,
PRIMARY KEY (emprestimo_exemplar_id),
CONSTRAINT FKemprestimo
FOREIGN KEY (emprestimo_id)
REFERENCES universoleitura.emprestimos(emprestimo_id),
CONSTRAINT FKexemplar
FOREIGN KEY (exemplar_id)
REFERENCES universoleitura.exemplares(exemplar_id)
);

INSERT INTO associados VALUES (1, 1234561, "Ronaldo", "Gaúcho", "R. Abiridin 2222", "Ho Chi Minh City", "Hanoi");
INSERT INTO associados VALUES (2, 1234562, "Uepa", "Ehnoix", "R. Abiridin 2222", "Ho Chi Minh City", "Hanoi");
INSERT INTO associados VALUES (3, 1234563, "Lalala", "Uou", "R. Abiridin 2222", "Ho Chi Minh City", "Hanoi");
INSERT INTO associados VALUES (4, 1234564, "Atchin", "Zangado", "R. Abiridin 2222", "Ho Chi Minh City", "Hanoi");
INSERT INTO associados VALUES (5, 1234565, "Piriri", "Cansado", "R. Abiridin 2222", "Ho Chi Minh City", "Hanoi");

ALTER TABLE associados
CHANGE associado_estado associado_estado VARCHAR(35);

UPDATE associados
SET associado_estado = "Hanoi"
WHERE associado_id = 1;

UPDATE associados
SET associado_estado = "Hanoi"
WHERE associado_id = 2;

UPDATE associados
SET associado_estado = "Hanoi"
WHERE associado_id = 3;

UPDATE associados
SET associado_estado = "Hanoi"
WHERE associado_id = 4;

UPDATE associados
SET associado_estado = "Hanoi"
WHERE associado_id = 5;

INSERT INTO telefones VALUES (1, 99991-2341, 1);
INSERT INTO telefones VALUES (2, 99991-2342, 2);
INSERT INTO telefones VALUES (3, 99991-2343, 3);
INSERT INTO telefones VALUES (4, 99991-2344, 4);
INSERT INTO telefones VALUES (5, 99991-2345, 5);
INSERT INTO telefones VALUES (6, 99991-2346, 1);
INSERT INTO telefones VALUES (7, 99991-2347, 2);
INSERT INTO telefones VALUES (8, 99991-2341, 1);
INSERT INTO telefones VALUES (9, 9-2341, 3);
INSERT INTO telefones VALUES (10, 999912341, 1);

INSERT INTO autores VALUES (1, "Mascaro", "Alysson");

INSERT INTO editoras VALUES (1, "Saudade da Morena", 991582356);
INSERT INTO editoras VALUES (2, "Tchuc-Tchuc", 991522356);
INSERT INTO editoras VALUES (3, "Miau", 931582356);

INSERT INTO livros VALUES (1, 9788578887230, "Dom Casmurro", 1899-01-01, 1, 1900, 1);
INSERT INTO livros VALUES (2, 9788578887230, "Dom Casmurro", 1899-01-01, 1, 1900-01-01, 1);
INSERT INTO livros VALUES (3, 9788578887233, "Dom Casmurro", 1899, 1, 1900, 1);
INSERT INTO livros VALUES (4, 9788578887231, "Dom Casmurro", "1899-01-01", 1, "1900-01-01", 2);
INSERT INTO livros VALUES (5, 9780850515022, "Memórias Póstumas de Brás Cubas", "1881", 1, "1881", 2);

INSERT INTO exemplares VALUES (1, 1, 0);
INSERT INTO exemplares VALUES (2, 2, true);
INSERT INTO exemplares VALUES (3, 3, "false");
INSERT INTO exemplares VALUES (4, 4, "true");
INSERT INTO exemplares VALUES (5, 5, 0);

INSERT INTO emprestimos VALUES (1, 2, "2021-11-02", "2021-11-09", "2021-11-08");
INSERT INTO emprestimos VALUES (2, 1, "2021-11-02", "2021-13-09", "2021-11-08");
INSERT INTO emprestimos VALUES (3, 5, "2021-11-02", "2021-11-16", "2021-11-18");
INSERT INTO emprestimos VALUES (4, 3, "2021-11-02", "2021-11-09", "2021-11-05");
INSERT INTO emprestimos VALUES (5, 4, "2021-11-02", "2021-11-16", "2021-11-16");

INSERT INTO emprestimo_exemplares VALUES (1, 5, 5);
INSERT INTO emprestimo_exemplares VALUES (2, 5, 5);
INSERT INTO emprestimo_exemplares VALUES (3, 2, 4);

SET foreign_key_checks = 0;

DELETE FROM associados WHERE associado_id = 5;

SET foreign_key_checks = 1;

SET foreign_key_checks = 0;

DELETE FROM livros WHERE livro_id = 3;

SET foreign_key_checks = 1;

UPDATE associados
SET associado_endereco = "Rua das Flores, 860"
WHERE associado_id = 3;