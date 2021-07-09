//objetos no javascript praticando...
const pessoa ={
    nome: "Marcelo",
    idade: 33,
    cidade:"Marituba"
}

//----acessando o objeto----//
//Notação de ponto
console.log(pessoa.nome)

//Notação de colchete
console.log(pessoa['idade'])

//Como desestruturar objetos
const{nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)

//array de objetos
const filmes = [
    {
        id:1,
        titulo:"Vingadores",
        descricao:"Filme da Marvel",
        duracao:120
    },

    {
        id:2,
        titulo:"Homen de Ferro",
        descricao:"Filme da Marvel",
        duracao:120
    },

    {
        id:3,
        titulo:"Capitão America",
        descricao:"Filme da Marvel",
        duracao:120
    }
]

const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)
filmes.map(filme => console.log(filme.descricao))