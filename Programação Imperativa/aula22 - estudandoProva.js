let estudante = {
    nome: "fulano",
    faltas: 5,
    notas: [7, 8, 6, 10]
}

function Estudante(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        let n = (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4;
        return n;
    }
    this.ausente = function(){
        this.faltas++;
    }
}

let estudante1 = new Estudante("Marcelo", 1, [7, 8, 6, 10]);

module.exports = Estudante;