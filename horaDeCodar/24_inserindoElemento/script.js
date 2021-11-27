//criando elemento pelo DOM
var el = document.createElement('div')

//clasList cria uma classe na tag pelo DOM
el.classList = 'div-criada'

var container = document.querySelector('#container')

//inserindo um elemento filho pelo DOM
container.appendChild(el)

/* ** insertBefore - insere antes ** */

var el2 = document.createElement('div')

el2.classList = 'div-before'

var el3 = document.querySelector('#container .div-criada')

/*precisa de dois parametros: 
    - o primerio que será inserio;  
    - o segundo a referencia para inserir o elemento;*/
container.insertBefore(el2, el3)