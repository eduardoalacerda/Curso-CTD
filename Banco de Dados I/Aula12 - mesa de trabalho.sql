-- 1 Importe a base de dados. Clique aqui para baixar.

USE projeto_spotify;

-- 2 Liste as músicas que possuem a letra "z" no título.

SELECT idcancao, titulo FROM cancao WHERE titulo LIKE '%z%';

-- 3 Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.

SELECT * FROM cancao WHERE titulo LIKE '_a%' AND titulo LIKE '%s';

-- 4 Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.

SELECT idPlaylist as 'Id Playlist', idusuario as 'Id Usuário' , titulo as 'Título', qtdcancoes as 'Quantidade Canções', idestado as 'Id Estado', Datacriacao as 'Data Criação', Dataexclusao as 'Data Exclusão' FROM playlist WHERE qtdcancoes = (SELECT MAX(qtdcancoes) FROM playlist);

-- 5 Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.

SELECT * FROM usuario ORDER BY Data_nac ASC LIMIT 5 OFFSET 10;

-- 6 Liste as 5 músicas com mais reproduções, em ordem decrescente.

SELECT * FROM cancao ORDER BY qtdreproducao DESC LIMIT 5;

-- 7 Gere um relatório de todos os álbuns em ordem alfabética.

SELECT * FROM album ORDER BY titulo ASC;

-- 8 Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.

SELECT * FROM album WHERE imagemcapa IS NULL;

/* 9 Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):

nomeusuario: novousuariodespotify@gmail.com
Nome e sobrenome: Elmer Santos 
password: S4321m
Data de nacimiento: 15/11/1991
Sexo: Masculino
Código Postal: B4129ATF
País: Brasil */

INSERT INTO usuario VALUES (20, 'novousuariodespotify@gmail.com', 'Elmer Santos', '1991-11-15', 'M', 'B4129ATF', 'S4321m', 9, 3);

-- 10 Exclua todas as músicas do gênero "pop" da tabela generoxcancao.

ALTER TABLE generoxcancao DROP CONSTRAINT cancao;
ALTER TABLE playlistxcancao DROP CONSTRAINT Idcancao;

DELETE cancao FROM cancao INNER JOIN generoxcancao ON cancao.idcancao = generoxcancao.Idcancao
WHERE (generoxcancao.IdGenero = 9);

-- 11 Edite todos os artistas que não possuem uma imagem carregada e carregue para eles o texto "Imagem em falta" na coluna de imagens.

SELECT * FROM artista;

UPDATE artista
SET imagem = 'Imagem em falta'
WHERE imagem IS NULL;