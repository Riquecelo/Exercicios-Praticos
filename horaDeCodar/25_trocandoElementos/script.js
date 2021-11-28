//Trocando elementos por outro com JavaScript

//criando um elemento
var elemento = document.createElement('h3')
elemento.classList = 'teste-classe'
var texto = document.createTextNode('Este é o texto do h3')
elemento.appendChild(texto)
console.log(elemento)

//selecionar o elemento que quero trocar
var title = document.querySelector('h1')
console.log(title)

//selecione o pai do elemento a ser trocado
//parentNode - pega o elemento acima na hierarquia
var elementoPai = title.parentNode 
console.log(elementoPai)

//trocar os elementos
/*replaceChild: troca os elementos filhos
    - o primeiro argumento é o elemento q será inserido
    - o segundo argumento é o elemento q será trocado
*/
elementoPai.replaceChild(elemento, title)