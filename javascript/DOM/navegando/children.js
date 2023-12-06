//Navegando pelos elementos filhos

const el = document.querySelector('body');

//childNodes => leva em conta os espaços e os 
//classifica como 'text'. Devolve uma nodeList.
console.log( el.childNodes)

//children => NÃO conta os espaços em branco
// devolve uma HTMLColection
console.log(el.children)

//firstChild => leva em consideração os espaços
console.log(el.firstChild)

//firstElementChild NÃO leva em consideração os espaços
console.log(el.firstElementChild)

//lastChild e lastElementChild NÃO leva em consideração os espaços
console.log(el.lastChild)
console.log(el.lastElementChild)