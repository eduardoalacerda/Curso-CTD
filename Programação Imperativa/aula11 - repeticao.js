// EXERCICIO 1

let A = [5, 8, 4, 9, 5];
let B = [8, 7, 8, 6, 8];
let C = [7, 5, 10, 8, 3];

// EXERCICIO 2
function pontuacaoMedia(participante) {
    let soma = 0
    for (let contador = 0; contador < participante.length; contador++) {
        soma = participante[contador] + soma
    }
    return soma / participante.length
}

console.log(pontuacaoMedia(B));

// EXERCICIO 3
function pontuacaoMaior(participante) {
    let top = participante[0]
    for (let contador = 1; contador < participante.length; contador++) {
        if (participante[contador] > top) {
            top = participante[contador];
        }
    }
    return top
}

console.log(pontuacaoMaior(C));


//EXERCICIO 4
function competicao(a, b, c) {
    let mediaA = pontuacaoMedia(a)
    let mediaB = pontuacaoMedia(b)
    let mediaC = pontuacaoMedia(c)
    let maiorA = pontuacaoMaior(a)
    let maiorB = pontuacaoMaior(b)
    let maiorC = pontuacaoMaior(c)

    if (mediaA > mediaB && mediaA > mediaC) {
        console.log("O vencedor por maior MÉDIA é o participante A");
    } else if (mediaB > mediaA && mediaB > mediaC) {
        console.log("O vencedor por maior MÉDIA é o participante B");
    } else {
        console.log("O vencedor por maior MÉDIA é o participante C");
    }
    if (maiorA > maiorB && maiorA > maiorC) {
        console.log("O vencedor por MAIOR nota é o participante A");
    } else if (maiorB > maiorA && maiorB > maiorC) {
        console.log("O vencedor por MAIOR nota é o participante B");
    } else {
        console.log("O vencedor por MAIOR nota é o participante C");
    }
}

competicao(A, B, C);