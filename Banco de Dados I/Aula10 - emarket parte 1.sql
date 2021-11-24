USE emarket;

-- Queremos ter uma lista de todas as categorias.

SELECT CategoriaNome FROM categorias;

-- Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.

SELECT CategoriaNome, Descricao FROM categorias;

-- Obtenha uma lista dos produtos.

SELECT ProdutoNome FROM produtos;

-- Existem produtos descontinuados? (Descontinuado = 1).

SELECT ProdutoNome, Descontinuado FROM produtos WHERE Descontinuado = 1;

-- Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem?

SELECT ProdutoNome, ProvedorID FROM produtos WHERE ProvedorID = 8;

-- Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.

SELECT ProdutoNome, PrecoUnitario FROM produtos WHERE PrecoUnitario BETWEEN 10 AND 22;

/* Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar? */

SELECT ProdutoNome, NivelReabastecimento, UnidadesEstoque FROM produtos WHERE UnidadesEstoque < NivelReabastecimento;

/* Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero. */

SELECT ProdutoNome, NivelReabastecimento, UnidadesEstoque, UnidadesPedidas FROM produtos WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas = 0;

/* Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país. */

SELECT ClienteID, Contato, Empresa, Titulo as Cargo, Pais FROM clientes ORDER BY Pais ASC;

/* Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner). */

SELECT Contato, Titulo as Cargo FROM clientes WHERE Titulo = 'Owner';

/* A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com
todos os contatos que começam com a letra C? */

SELECT Contato FROM clientes WHERE Contato LIKE 'C%';

/* Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente. */

SELECT FaturaId, DataFatura FROM faturas ORDER BY DataFatura ASC;

/* Agora é necessário uma lista de faturas com o país de envio "EUA" e
que a FormaeEnvio seja diferente de 3. */

SELECT FaturaId, PaisEnvio, FormaEnvio FROM faturas WHERE PaisEnvio = 'USA' AND FormaEnvio <> 3;

-- O cliente 'GOURL' fez um pedido?

SELECT FaturaId, ClienteID FROM faturas WHERE ClienteID = 'GOURL';

-- Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.

SELECT FaturaId, EmpregadoID as 'Funcionarios' FROM faturas WHERE EmpregadoID = 2 OR EmpregadoID = 3 OR EmpregadoID = 5 OR EmpregadoID = 8 OR EmpregadoID = 9;