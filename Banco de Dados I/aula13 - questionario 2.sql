USE musimundos;

/*Funcões, Group by y Having #1 - Clientes de Brasil: A quantidade de clientes do Brasil é:*/

SELECT id, nome, sobrenome, pais
FROM clientes
WHERE clientes.pais = 'Brazil'
GROUP BY nome;

SELECT id, nome, sobrenome, pais
FROM clientes
GROUP BY nome
HAVING clientes.pais = 'Brazil';

/*Funções, Group by e Having #2 - Canções por gênero: Faça uma consulta ao banco de dados que mostre a identificação do gênero e o número de músicas que possui. O número que você obteve como resultado do número de músicas do gênero com id = 6 foi:*/

SELECT generos.id, generos.nome, cancoes.id, cancoes.nome, COUNT(generos.id)
FROM generos
INNER JOIN cancoes ON cancoes.id_genero = generos.id
WHERE generos.id = 6;

-- SQL- Funções, Group by e Having #3 - Balanço comercial: Faça uma consulta ao nosso banco de dados que some o total de todas as notas fiscais emitidas pela empresa. O resultado encontrado foi:

SELECT SUM(valor_total) FROM faturas;

-- Funções, Group by e Having #4 - Duração dos álbuns: Obtenha uma lista de todos os álbuns e sua duração média (milissegundos). O número da média obtida para o álbum 4 foi:

SELECT albuns.id AS id_do_album, albuns.titulo AS titulo_do_album, artistas.id AS id_artista, artistas.nome AS artista_nome, AVG(cancoes.duracao_milisegundos) AS 'Duracao Album'
FROM albuns
INNER JOIN cancoes ON cancoes.id_album = albuns.id
INNER JOIN artistas ON artistas.id = albuns.id_artista
GROUP BY albuns.id;

-- Funções, Group by e Having #5 - Movendo arquivos: Faça uma consulta ao banco de dados e informe qual é o arquivo de música com o menor peso em bytes.

SELECT cancoes.id, cancoes.nome, cancoes.id_tipo_de_arquivo, cancoes.bytes, tipos_de_arquivo.id, tipos_de_arquivo.nome /* verificar como  professor pq a divergencia */
FROM cancoes, tipos_de_arquivo
WHERE cancoes.id_tipo_de_arquivo = tipos_de_arquivo.id
ORDER BY cancoes.bytes ASC;

-- Funções, Group by e Having #6 - Desconto: Faça uma consulta ao banco de dados que nos traga por cliente_id a soma total de suas faturas. Filtre aqueles em que a soma do total é > 45. Qual é a soma total do cliente com id = 6?

SELECT clientes.id, clientes.nome, SUM(faturas.valor_total) AS 'total'
FROM faturas, clientes
WHERE faturas.id_cliente = clientes.id
GROUP BY clientes.id HAVING SUM(faturas.valor_total) > 45;