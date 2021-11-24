//Instrução 'this'
/* Fora do escopo local refere-se ao objeto global Window
 * em objetos refere-se a instancia e pode acessar suas propriedades
 */
let pessoa = {
    nome: "Marcelo",
    idade: 33,
    falar: function () {
        console.log("Olá mundo!")
    },
    soma: function (a, b) {
        return a + b;
    },
    dizerNome: function () {
        console.log('O nome é ' + this.nome)
    },
    aniversario: function () {
       /*return console.log(this.idade += 1);*/
       this.idade += 1;
    }
}

pessoa.dizerNome()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)

