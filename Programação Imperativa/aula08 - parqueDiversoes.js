/*

function podeSubir(altura, acompanhada){
    if (altura >= 1.40 && altura <= 2.00){
        console.log("Pode subir :D!");
    } else if(altura < 1.40 && acompanhada == true) {
        console.log("Deverá subir acompanhada");
    } else {
        console.log("Não poderá subir");
    }
}
podeSubir(2.01, true)

*/

/*
function podeSubir(altura, acompanhada) {
    let podesubir = ''
    if (altura >= 1.40 && altura <= 2.00) {
        podesubir = true
    } else if (altura < 1.40 && acompanhada == true) {
        podesubir = true
    } else {
        podesubir = false
    } 
    return console.log(podesubir)
}
podeSubir(1.39, false)
*/
/*
function podeSubir(altura, acompanhada) {
    let podesubir = ''
    if ((altura >= 1.40 && altura <= 2.00) || (altura < 1.40 && acompanhada == true)) {
        podesubir = true
    }
    else {
        podesubir = false
    }
    return console.log(podesubir)
}
podeSubir(2.39, true)
*/

function podeSubir(altura, acompanhada) {
    let subir = '';
    if ((altura >= 1.40 && altura <= 2.00) || (altura < 1.40 && acompanhada == true)) {
        subir = true;
    }
    else {
        subir = false;
    }
    return subir;
}

if (podeSubir(1.40, true)){
    console.log("Pode Subir")
} else {
    console.log("Não Pode Subir")
}