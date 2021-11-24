/* Exercício opcional III
Instruções (Continuação)

Vamos continuar praticando consultas no banco de dados de filmes. Se você não baixou o banco de dados, clique aqui. Sem mais delongas, vamos começar com o exercício. Boa sorte!😎👌✨*/

/*Consultas
Funções de agregação, GROUP BY e HAVING*/

USE filmes_db;

-- 1 Quantos filmes estão registrados?

SELECT COUNT(titulo) FROM filmes;

-- R: 21 fimes.

-- 2 Quantos filmes têm entre 3 e 7 prêmios?

SELECT COUNT(titulo) AS filmes_com_3_a_7_premios FROM filmes WHERE premios >= 3 AND premios <= 7;

-- R: 8 filmes. 

-- 3 Quantos filmes têm entre 3 e 7 prêmios e classificação superior a 7?

SELECT COUNT(titulo) AS 'total_filmes_premios_e_classificacao' FROM filmes WHERE premios >= 3 AND premios <= 7 AND avaliacao > 7;

-- R: 8.

-- 4 Crie uma lista da tabela de filmes, mostre um relatório da quantidade de filmes por id. do gênero.

SELECT COUNT(filmes.titulo) AS 'qtd', generos.id, generos.nome AS genero_nome
FROM filmes
INNER JOIN generos ON filmes.genero_id = generos.id
GROUP BY generos.id;

/* R:
qtd	id	genero_nome
1	1	Comedia
3	3	Drama
5	5	Ciencia Ficcion
1	6	Suspenso
4	7	Animacion
3	8	Aventuras
2	10	Infantiles */

-- 5 Na consulta anterior, liste apenas os gêneros que têm como soma de prêmios um número maior que 5.

SELECT generos.id, generos.nome AS genero_nome, SUM(premios) as 'soma_premios'
FROM filmes
INNER JOIN generos ON filmes.genero_id = generos.id
GROUP BY generos.nome HAVING SUM(filmes.premios) > 5;

/* R:
id	genero_nome	soma_premios
7	Animacion	6
5	Ciencia Ficcion	22
3	Drama	20 */