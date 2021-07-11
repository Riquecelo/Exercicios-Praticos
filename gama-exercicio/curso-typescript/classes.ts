//Class no typeScript abrange teorias de POO na sua construção
class Data {
    dia: number; // aceita mondificadores de acesso
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 1223);
console.log(data.dia);