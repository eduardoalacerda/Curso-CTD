/* Explicação durante a aula

let arrowSomar = (a, b,) => a+b;

console.log(arrowSomar(2, 2));

function soma(a, b, cb){
    let result = a+b
    return cb(result);
}

function texto(){
    return " saudade da morena";
}

console.log(soma(2, 2, texto));





// segundo teste




console.log(soma(2,2, function(p1){
    return "esse é o meu resultado " +p1
}));*/

// Micro desafios

function acaoCarro(cb) {
    console.log(cb());
}

let andar = () => "O carro está andando";
let parar = () => "O carro parou";

// acaoCarro(parar)

// Mesa de Trabalho

let fizzBuzz = (a, b, palavra1, palavra2) => {

    for (let i = 1; i <= 100; i++) {
        if ((i % a === 0) && (i % b !== 0)) {
            console.log(palavra1);
        } else if ((i % b === 0) && (i % a !== 0)) {
            console.log(palavra2);
        } else if (i % a === 0 && i % b === 0) {
            console.log(palavra1+palavra2);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(2, 5, "noi", "serv")