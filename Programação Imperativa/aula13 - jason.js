let facebook = {
    "nome" : "Eduardo",
    "apelido" : "Du",
    "idade" : 29,
    "usuario" : "eduardolacerda",
    "email" : "eduardoacintra@gmail.com"
}

console.log(facebook);

let segundaAtividade = {
    funcao : "criar um objeto",
    com : "uma função",
    metodo : function(corCaneta) {
        return "estou usando uma caneta " + facebook.corCaneta + " e também " + this.com;
    }
}

console.log(segundaAtividade.metodo(nome));