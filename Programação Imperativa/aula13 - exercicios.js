//EXERCICIO 1 - OBEJETOS LITERAIS

function Conta(numero, tipo, saldo, titular) {
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let conta1 = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte");
let conta2 = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let conta3 = new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
let conta4 = new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley");
let conta5 = new Conta(7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
let conta6 = new Conta(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
let conta7 = new Conta(4223508636, "Conta Corrente", 2177, "Thomasin Latour");
let conta8 = new Conta(185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
let conta9 = new Conta(3151956165, "Conta Corrente", 7601, "Alonso Wannan");
let conta10 = new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett");

let lista = {
    Abigael: conta1,
    Ramon: conta2,
    Jarret: conta3,
    Ansel: conta4,
    Jacki: conta5,
    Jobi: conta6,
    "Thomasin Latour": conta7,
    Lonnie: conta8,
    Alonso: conta9,
    Bendite: conta10
}

let banco = {
    clientes: lista,
    consultarCliente: function (titular) {
        return this.clientes[titular];
    },
    deposito: function (titular, valor) {
        let resultado = this.clientes[titular].saldo;
        return "Depósito realizado, seu novo saldo é: " + (resultado + valor);
    },
    saque: function (titular, valor) {
        let resultado = this.clientes[titular].saldo;
        resultado = (resultado - valor)
        if (resultado < 0) {
            return "Fundos insuficientes"
        } else {
            return "Extração feita com sucesso, seu novo saldo é: " + resultado;
        }
    }
}

console.log(banco.saque("Thomasin Latour", 2177));

// EXERCICIOS BONUS EXTRA

// PROPRIEDADE UNICA

let arrayDeObjetos = [{ nome: "Ronaldo", idade: 27 }, { nome: "Gaúcho", idade: 49 }];

function propriedadeUnica(array, string) {
    resultado = [];
    for (let i = 0; i < array.length; i++) {
            resultado.push({[string] : array[i][string]});// para chamar a propriedade seguida do seu valor deve-se colocar tudo entre chaves (o valor determinado no parâmetro string retorna como nome da propriedade, não há como puxar o nome da propriedade e seu valor, apenas seu valor)
    }
    return resultado;
}

console.log(propriedadeUnica(arrayDeObjetos, "idade"));

// CALCULADORA DE NOTAS

let aluno = {
    numero: 1,
    numeroDoArquivo: 123,
    listaDeNotas: [5, 7, 8, 9]
}

function calcularMedia(array, string) { //função para calcular a média
    let resultado = 0;
    let array1 = array[string]
    for (let i = 0; i < array1.length; i++) {
        resultado = array1[i] + resultado;
    }
    return resultado / array1.length;
}

console.log(calcularMedia(aluno, "listaDeNotas")); //teste da função calcular media

function aprovar(media) { //função para calcular aprovação com base na condição do if
    if (media >= 8) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log(aprovar(calcularMedia(aluno, "listaDeNotas"))); //teste da função aprovar chamando a função calcularmedia