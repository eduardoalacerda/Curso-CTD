function Dados(altura, sexo) {
    this.altura = altura;
    this.sexo = sexo;
}

let pessoa1 = new Dados(1.90, "M");
let pessoa2 = new Dados(1.80, "F");
let pessoa3 = new Dados(1.20, "F");
let pessoa4 = new Dados(1.70, "M");
let pessoa5 = new Dados(1.60, "F");
let pessoa6 = new Dados(1.65, "M");
let pessoa7 = new Dados(1.95, "M");
let pessoa8 = new Dados(2.00, "F");
let pessoa9 = new Dados(1.80, "M");
let pessoa10 = new Dados(1.82, "F");
let pessoa11 = new Dados(1.63, "F");
let pessoa12 = new Dados(1.69, "M");
let pessoa13 = new Dados(1.70, "M");
let pessoa14 = new Dados(1.55, "M");
let pessoa15 = new Dados(1.50, "F");

let lista = {
    pessoa1,
    pessoa2,
    pessoa3,
    pessoa4,
    pessoa5,
    pessoa6,
    pessoa7,
    pessoa8,
    pessoa9,
    pessoa10,
    pessoa11,
    pessoa12,
    pessoa13,
    pessoa14,
    pessoa15
};

let concurso = {
    pessoas: lista,
    mostrarAltura: function(titular) {
        return this.pessoas[titular];
    }
}

console.log(lista[1]);