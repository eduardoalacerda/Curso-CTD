//EXERCICIO 1 INVERSO

let array1 = [1, 2, 3]

function inverter() {
    return array1 = [3, 2, 1] //retorna o inverso
}

function imprimirInverso() {
   console.log(inverter()); //imprime o retorno inverso
}

console.log(array1);
imprimirInverso();

// EXERCICIO 2 SOMARARRAYS

let array2 = [2, 2, 2]

function somarArray(){
    return array2[0]+array2[1]+array2[2] //retorne some os elementos 0, 1, 2 do array2 FORA DE UM ARRAY (para dentro, colocar dentro de colchetes)
}
console.log(somarArray());

// EXERCICIO 3 JOIN

let array3 = ["l", "o", "v", "e"]

function join() {
    return array3[0]+array3[1]+array3[2]+array3[3]
}

console.log(join());

// EXERCICIO 4 COLECOES DE FILMES
//1) e 2)
let array4 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function maiusculas() {
    return array4 = [array4[0].toUpperCase()+ ", "+ array4[1].toUpperCase()+ ", "+array4[2].toUpperCase()+", "+array4[3].toUpperCase()+", "+array4[4].toUpperCase()]
}

console.log(maiusculas());

//3)
let array5 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let array6 = ["terra em transe", "dragão da maldade contra o santo guerreiro"]

function trocarConteudo(a, b) {
    a = array5
    b = array6
    a.push(b[0]) //"empurra" o indice 0 para o array5
    a.push(b[1]) //"empurra" o indice 1 para o array5
    return console.log(array5)
}

trocarConteudo();

//4)
function retirarConteudo() {
    let array7 = array5.pop()
    return console.log(array5, array7);
}

retirarConteudo();

//5) a)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function iguais(){
    if (asiaScores[0] == euroScores[0]) {
        console.log("As notas de índice 0 são iguais");
    } else {
        console.log("As notas de índice 0 não são iguais");
    } if (asiaScores[1] == euroScores[1]) {
        console.log("As notas de índice 1 são iguais");
    } else {
        console.log("As notas de índice 1 não são iguais");
    } if (asiaScores[2] == euroScores[2]) {
        console.log("As notas de índice 2 são iguais");
    } else {
        console.log("As notas de índice 2 não são iguais");
    } if (asiaScores[3] == euroScores[3]) {
        console.log("As notas de índice 3 são iguais");
    } else {
        console.log("As notas de índice 3 não são iguais");
    }if (asiaScores[4] == euroScores[4]) {
        console.log("As notas de índice 4 são iguais");
    } else {
        console.log("As notas de índice 4 não são iguais");
    }if (asiaScores[5] == euroScores[5]) {
        console.log("As notas de índice 5 são iguais");
    } else {
        console.log("As notas de índice 5 não são iguais");
    }if (asiaScores[6] == euroScores[6]) {
        console.log("As notas de índice 6 são iguais");
    } else {
        console.log("As notas de índice 6 não são iguais");
    }if (asiaScores[7] == euroScores[7]) {
        console.log("As notas de índice 7 são iguais");
    } else {
        console.log("As notas de índice 7 não são iguais");
    }if (asiaScores[8] == euroScores[8]) {
        console.log("As notas de índice 8 são iguais");
    } else {
        console.log("As notas de índice 8 não são iguais");
    }
}


//EXERCICIO 1 INVERSO

let array1 = [1, 2, 3]

function inverter() {
    return array1 = [3, 2, 1] //retorna o inverso
}

function imprimirInverso() {
   console.log(inverter()); //imprime o retorno inverso
}

console.log(array1);
imprimirInverso();

// EXERCICIO 2 SOMARARRAYS

let array2 = [2, 2, 2]

function somarArray(){
    return array2[0]+array2[1]+array2[2] //retorne some os elementos 0, 1, 2 do array2 FORA DE UM ARRAY (para dentro, colocar dentro de colchetes)
}
console.log(somarArray());

// EXERCICIO 3 JOIN

let array3 = ["l", "o", "v", "e"]

function join() {
    return array3[0]+array3[1]+array3[2]+array3[3]
}

console.log(join());

// EXERCICIO 4 COLECOES DE FILMES
//1) e 2)
let array4 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function maiusculas() {
    return array4 = [array4[0].toUpperCase()+ ", "+ array4[1].toUpperCase()+ ", "+array4[2].toUpperCase()+", "+array4[3].toUpperCase()+", "+array4[4].toUpperCase()]
}

console.log(maiusculas());

//3)
let array5 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let array6 = ["terra em transe", "dragão da maldade contra o santo guerreiro"]

function trocarConteudo(a, b) {
    a = array5
    b = array6
    a.push(b[0]) //"empurra" o indice 0 para o array5
    a.push(b[1]) //"empurra" o indice 1 para o array5
    return console.log(array5)
}

trocarConteudo();

//4)
function retirarConteudo() {
    let array7 = array5.pop()
    return console.log(array5, array7);
}

retirarConteudo();

//5) a)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function iguais(){
    if (asiaScores[0] == euroScores[0]) {
        console.log("As notas de índice 0 são iguais");
    } else {
        console.log("As notas de índice 0 não são iguais");
    } if (asiaScores[1] == euroScores[1]) {
        console.log("As notas de índice 1 são iguais");
    } else {
        console.log("As notas de índice 1 não são iguais");
    } if (asiaScores[2] == euroScores[2]) {
        console.log("As notas de índice 2 são iguais");
    } else {
        console.log("As notas de índice 2 não são iguais");
    } if (asiaScores[3] == euroScores[3]) {
        console.log("As notas de índice 3 são iguais");
    } else {
        console.log("As notas de índice 3 não são iguais");
    }if (asiaScores[4] == euroScores[4]) {
        console.log("As notas de índice 4 são iguais");
    } else {
        console.log("As notas de índice 4 não são iguais");
    }if (asiaScores[5] == euroScores[5]) {
        console.log("As notas de índice 5 são iguais");
    } else {
        console.log("As notas de índice 5 não são iguais");
    }if (asiaScores[6] == euroScores[6]) {
        console.log("As notas de índice 6 são iguais");
    } else {
        console.log("As notas de índice 6 não são iguais");
    }if (asiaScores[7] == euroScores[7]) {
        console.log("As notas de índice 7 são iguais");
    } else {
        console.log("As notas de índice 7 não são iguais");
    }if (asiaScores[8] == euroScores[8]) {
        console.log("As notas de índice 8 são iguais");
    } else {
        console.log("As notas de índice 8 não são iguais");
    }
}

iguais();