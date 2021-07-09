//----------Projeto javaScript---------//
//finalizado

const livros = require('./database')

//pegar o input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//ser for S, mostra categorias disponíveis, escolher categoria
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log("Produtividade", "/Ficção", "/Auto Ajuda", "/Tecnologia")
    
    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
//se for N, mostrar todos os livros em ordem crescente por maior quantidade de páginas
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis ')
    console.table(livrosOrdenados)
}

