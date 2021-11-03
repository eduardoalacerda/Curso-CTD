// 1

function loopDePares(a) {
    for (let i = 0; i <= 100; i++) {
        if ((i + a) % 2 === 0) {
            console.log("O número " + (a + i) + " é par.");
        } else {
            console.log(i);
        }
    }
}

// loopDePares(2)

// 2

function loopDeImpares(a, palavra) {
    for (let i = 0; i <= 100; i++) {
        if ((i + a) % 2 !== 0) {
            console.log(palavra);
        } else {
            console.log(i);
        }
    }
}

// loopDeImpares(1, "amor")

// 3

function soma(a) {
    let resultado = 0
    for (let i = 0; i <= a; i++) {
        resultado += i;
    }
    return resultado;
}

// console.log(soma(3));

function newArray(a) {
    let resultado = [];
    for (let i = 1; i <= a; i++) {
        resultado.push(i);
    }
    return resultado;
}

// console.log(newArray(2));

function split(string) {
    let resultado = [];
    for (let i = 0; i < string.length; i++) {
        resultado.push(string[i]);
    }
    return resultado;
}

// console.log(split("ola"));

// 6

let arrayteste = [0, 1, 0, 2, 0, 2];

function moverZeros(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            array.push(array.splice(i, 1)[0]);
        }
    }
    return array;
}

// console.log(moverZeros(arrayteste));

// 7

let array1 = [1, 2, 3];
let array2 = ["o", "l", "a"];

function arrayHandler(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        console.log("Eu sou " + array1[i] + " e eu sou " + array2[i]);
    }
}

// arrayHandler(array1, array2);

// 8
function arrayObjects(num) {
    let objeto = [];
    for (i = 1; i <= num; i++) {
        objeto.push({ valor: i })
    }
    return objeto;
}

// console.log(arrayObjects(5));

// 9

function arrayObjectsTwo(num, pal) {
    let objeto = [];
    for (i = 1; i <= num; i++) {
        objeto.push({ [pal]: i })
    }
    return objeto;
}

console.log(arrayObjectsTwo(5, "saudade"));