//EXERCICIO 1 CONCURSO

let alicia = [45, 8, 32];
let bob = [23, 82, 46];

function encontrarGanhador(a, b) {
    let pontosAlicia = 0;
    let pontosBob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            pontosAlicia += 1
        } else {
            pontosBob += 1
        }
    } if (pontosAlicia > pontosBob) {
        return "Alicia"
    } else {
        return "Bob"
    }
}
console.log("O vencedor do concurso é " + encontrarGanhador(alicia, bob));

//EXERCICIO BONUS 1 DIGITALHOUSE
let numero1 = 2
let numero2 = 5

function digitalHouse(a, b) {

    for (let i = 1; i <= 100; i++) {
        if ((i % a === 0) && (i % b !== 0)) {
            console.log("Digital");
        } else if ((i % b === 0) && (i % a !== 0)) {
            console.log("House");
        } else if (i % a === 0 && i % b === 0) {
            console.log("Digital House");
        } else {
            console.log(i);
        }
    }
}

digitalHouse(numero1, numero2);

// EXERCICIO BONUS 2 SOMAARRAY REALOADED
let array1 = [2, 2, 2]
let array2 = ["ronaldinho", "gaúcho", "dibres", "aosom", "de", "linkinpark"]

function somaArrayReloaded(array){
    let arraySomado = 0

    for (let i = 0; i < array.length; i++) {
       arraySomado += array[i]; //retorne a soma do elemento anterior e posterior
    }
    return arraySomado
}
console.log(somaArrayReloaded(array1));



// EXERCICIO BONUS 3 JOIN RELOADED REALOADED
function joinReloaded(array){
    let arraySomado = [null]

    for (let i = 0; i < array.length; i++) {
       arraySomado += array[i]; //retorne a soma do elemento anterior e posterior
    }
    return arraySomado
}
console.log(joinReloaded(array2)); //esse eu descobri sem querer não sei nem se ta certo rs