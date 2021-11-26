var itensClasse = document.getElementsByName('item')
console.log(itensClasse)

//querySelectorAll - seleciona varios
var itensQuery = document.querySelectorAll('#lista2 li')
console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista2 .item')
console.log(itensQuery2)

//querySelector - seleciona apenas um
var lista = document.querySelector('#lista2')
console.log(lista)

var primeiraLista = document.querySelector('ul')
console.log(primeiraLista)

var span = document.querySelector('#paragrafo span')
console.log(span)