CREATE DATABASE Spotyferson;

USE Spotyferson;

CREATE TABLE usuario (
usuario_id INT(11) AUTO_INCREMENT,
usuario_nome VARCHAR(45),
usuario_data_nascimento DATE,
usuario_sexo VARCHAR(1),
usuario_email VARCHAR(150),
usuario_senha VARCHAR(45),
PRIMARY KEY (usuario_id)
);

CREATE TABLE artista (
artista_id INT(11) AUTO_INCREMENT,
artista_nome VARCHAR(45),
artista_sobrenome VARCHAR(100),
PRIMARY KEY (artista_id)
);

CREATE TABLE genero (
genero_id INT(11) AUTO_INCREMENT,
genero_nome VARCHAR(45),
PRIMARY KEY (genero_id)
);

CREATE TABLE playlist (
playlist_id INT(11) AUTO_INCREMENT,
usuario_id INT(11),
playlist_titulo VARCHAR(45),
qtd_cancoes INT(11),
playlist_data_criacao DATETIME,
PRIMARY KEY (playlist_id),
CONSTRAINT FKusuario
FOREIGN KEY (usuario_id)
REFERENCES spotyferson.usuario(usuario_id)
);

CREATE TABLE album (
album_id INT(11) AUTO_INCREMENT,
album_titulo VARCHAR(45),
artista_id INT(11),
PRIMARY KEY (album_id),
CONSTRAINT FKartista FOREIGN KEY (artista_id) REFERENCES spotyferson.artista(artista_id)
);

CREATE TABLE cancoes (
cancao_id INT(11) AUTO_INCREMENT,
cancao_titulo VARCHAR(45),
cancao_duracao DOUBLE,
qtd_reproducao INT(11),
qtd_likes INT(11),
album_id INT(11),
PRIMARY KEY (cancao_id),
CONSTRAINT FKalbum
FOREIGN KEY (album_id)
REFERENCES spotyferson.album(album_id)
);

CREATE TABLE playlist_cancao (
playlist_cancao_id INT(11) AUTO_INCREMENT,
cancao_id INT(11),
playlist_id INT(11),
PRIMARY KEY (playlist_cancao_id),
CONSTRAINT FKcancao
FOREIGN KEY (cancao_id)
REFERENCES spotyferson.cancoes(cancao_id),
CONSTRAINT FKplaylist
FOREIGN KEY (playlist_id)
REFERENCES spotyferson.playlist(playlist_id)
);

CREATE TABLE genero_cancao (
genero_cancao_id INT(11) AUTO_INCREMENT,
cancao_id INT(11),
genero_id INT(11),
PRIMARY KEY (genero_cancao_id),
CONSTRAINT FKcancao_2
FOREIGN KEY (cancao_id)
REFERENCES spotyferson.cancoes(cancao_id),
CONSTRAINT FKgenero
FOREIGN KEY (genero_id)
REFERENCES spotyferson.genero(genero_id)
);