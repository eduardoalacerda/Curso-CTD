function adicionar(a, b){
    return a + b;
}

function subtracao (a, b){
    return a - b;
}

function multiplicacao (a, b){
    return a * b;
}

function divisao (a, b){
    return a / b;
}

function quadradoDoNumero(a){
    return multiplicacao(a, a);
}

function mediaDeTresNumeros(a, b, c){
    let soma = adicionar(a, b) + c;
    let resultado = divisao(soma, 3);
    return resultado;
}

function calculaPorcentagem(a, b) {
    let decimal = divisao(a, 100);
    let resultado = multiplicacao(decimal, b);
    return resultado;
}

function geradorDePorcentagem(a, b) {
    let decimal = divisao(a, b);
    let resultado = multiplicacao(decimal, 100);
    return resultado;
}



/* console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar (1, 1));
console.log(subtracao (1, 1));
console.log(multiplicacao (1, 1));
console.log(divisao(1, 1));
console.log(divisao(1, 0));
console.log(divisao(0, 1));
console.log(quadradoDoNumero(2));
console.log(mediaDeTresNumeros(2, 2, 2));
console.log(calculaPorcentagem(10, 100));
console.log(geradorDePorcentagem(1, 10));*/