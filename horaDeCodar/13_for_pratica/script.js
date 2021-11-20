var lista = ['laranja', 'uva', 'maçã', 'banana', 'pera']

//irá criar um elemento direto no body 
var listaUl = document.createElement('ul')

//pegando o elemento body e adicionando na variável
var body = document.getElementsByTagName('body')

//console.log(body[0])

//acrescenta na tag body o elemento filho
body[0].appendChild(listaUl)

//pegando a ul criada e guardando na variável
var listaNoBody = document.getElementsByTagName('ul')

//console.log(listaNoBody[0])

for (let i = 0; i < lista.length; i++) {
    
    var liFor = document.createElement('li')

    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
    
}

