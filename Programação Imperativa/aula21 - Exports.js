// let listaEdu = {

// pessoa1 = altura: 1.90, sexo: "M",
// pessoa2  (1.80, "F"),
// pessoa3  (1.20, "F"),
// pessoa4  (1.70, "M"),
// pessoa5  (1.60, "F"),
// pessoa6  (1.65, "M"),
// pessoa7  (1.95, "M"),
// pessoa8  (2.00, "F"),
// pessoa9  (1.80, "M"),
// pessoa10  (1.82, "F"),
// pessoa11  (1.63, "F"),
// pessoa12  (1.69, "M"),
//  pessoa13 (1.70, "M"),
//  pessoa14 (1.55, "M"),
//  pessoa15 (1.50, "F"),
// }

let listaClayton = [
    {altura: 1.80, sexo: 'M'},
    {altura: 1.67, sexo: 'F'},
    {altura: 1.71, sexo: 'M'},
    {altura: 1.46, sexo: 'F'},
    {altura: 1.95, sexo: 'M'},
    {altura: 2.01, sexo: 'M'},
    {altura: 1.72, sexo: 'F'},
    {altura: 1.79, sexo: 'M'},
    {altura: 1.88, sexo: 'M'},
    {altura: 1.65, sexo: 'F'},
    {altura: 1.83, sexo: 'M'},
    {altura: 1.89, sexo: 'M'},
    {altura: 1.65, sexo: 'F'},
    {altura: 1.55, sexo: 'F'},
    {altura: 1.72, sexo: 'F'},
];


module.exports = listaClayton;

function menor(array){
    let alturas = [];
    for (let i=0; i<array.length; i++){
        alturas.push(array[i].altura);
    }
    return Math.min.apply(Math,alturas);
}
console.log(menor(lista));


function media(array){
    let alturas = [];
    let soma = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].sexo == "F") {
            alturas.push(array[i].altura);
        }
    }
    for (let j=0; j < alturas.length; j++){
        soma = soma + alturas[j];
    }
    return soma/alturas.length;
}
console.log(media(lista));


function homens(array){
    let soma = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].sexo == "M"){
            soma = soma + 1;
        }
    }
    return soma;
}
console.log(homens(lista));