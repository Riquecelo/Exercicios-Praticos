//Adicionando elementos

const nav = document.createElement('nav')
nav.innerHTML = `<ul>Menu <li>item1</li><li>item2</li> </ul>`

const body = document.querySelector('body');
const header = body.querySelector('header');//valor de referência

//insertBefore(ref1, ref2)
//ref1 - o que vou inserir
//ref2 - referência para adicionar antes
body.insertBefore(nav, header)

//simulando um depois
body.insertBefore(nav, header.nextSibling)

