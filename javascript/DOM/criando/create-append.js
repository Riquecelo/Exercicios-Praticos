//criando e adicionando elementos

//createElement
const div = document.createElement('div');
div.innerText= 'Hello Word!'

//append - adiciona no final da referencia
const body = document.querySelector('body')
body.append(div)

//prepend - adiciona no inicio da referencia
body.prepend(div)