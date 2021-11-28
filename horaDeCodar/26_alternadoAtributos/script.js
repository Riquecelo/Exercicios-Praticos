//adicionando atributos na tag com JS
var title = document.querySelector('#title')

/*setAttribute - adiciona atributos na tag html
    - o primeiro define o tipo
    - o segundo o nome
*/
title.setAttribute('class', 'teste-atributo')

var botao = document.querySelector('#btn')
botao.setAttribute('disabled', 'disabled')

var subTitulo = document.querySelector('h2')
subTitulo.setAttribute('id', 'titulo-2')

//removendo atributos da tag coom JS
var paragrafo = document.querySelector('#remover')
paragrafo.removeAttribute('id')