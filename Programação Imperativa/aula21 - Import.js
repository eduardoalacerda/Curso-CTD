let lista1 = require("./aula21 - ExportsClayton")

function criarObjeto(array) {
    let objetoLiteral = {};
    for (i = 0; i < array.length; i++) {
        objetoLiteral = array[i];
}
return objetoLiteral;
}

console.log(criarObjeto(lista1));