//navegando entre elementos irmãos
const el = document.querySelector('p')

//previousSibling nextSibling levam em consideração espaços
//ideal para elementos em linha
console.log(el.previousSibling)
console.log(el.nextSibling)

//previousElementSibling nextElementSibling NÃO conta os espaços em branco
console.log(el.previousElementSibling)
console.log(el.nextElementSibling)