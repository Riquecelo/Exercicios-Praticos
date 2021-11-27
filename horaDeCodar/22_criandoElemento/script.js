//document.creatElement() -> cria um novo elemento no DOM
var novoParagrafo = document.createElement('p')

//document.creatTextNode() -> cria textos pelo DOM
var texto = document.createTextNode('Este é um parágrafo')

//appendChild() -> insere um elemento filho no elemento pai pelo DOM [inserindo o texto dentro do parágrafo]
novoParagrafo.appendChild(texto)

//guardando o bady na variável para manipular
var body = document.querySelector('body')

//appendChild() -> insere um elemento filho no elemento pai pelo DOM [inserindo o parágrafo dentro do body]
body.appendChild(novoParagrafo)

// inserir em um container

var container = document.getElementById('container')
var titulo = document.createElement('h1')
var textoTitulo = document.createTextNode('Meu primeiro elemento criado com JS')
titulo.appendChild(textoTitulo)
container.appendChild(titulo)