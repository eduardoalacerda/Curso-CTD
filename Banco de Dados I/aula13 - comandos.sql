USE emarket;

SELECT  DataFatura FROM faturas;

SELECT COUNT(DataFatura) FROM faturas;

SELECT DATE_FORMAT(DataFatura, '%d-%M-%Y') FROM faturas;

SELECT MAX(DataFatura) FROM faturas;

SELECT MIN(DataFatura) FROM faturas;

SELECT AVG(PrecoUnitario) FROM produtos;

SELECT PrecoUnitario, ProdutoNome FROM produtos
WHERE PrecoUnitario < (SELECT AVG(PrecoUnitario) FROM produtos);