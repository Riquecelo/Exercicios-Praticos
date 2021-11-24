//Objetos em JavaScript
let pessoa = {
    nome: "Marcelo",
    idade: 33,
    falar: function () {
        console.log("Olá mundo!")
    },
    soma: function (a, b) {
        return a + b;
    }
}

console.log(pessoa.nome)
pessoa.falar()
console.log(pessoa.soma(4,5))
