var pegarOk = document.querySelector("div h1 span")
console.log(pegarOk)

//adicionando css com javaScript
pegarOk.style.color = 'red';

//background-Color escreve junto no js 
var titulo = document.querySelector('h1')
titulo.style.backgroundColor = 'darkslateblue';
titulo.style.color = 'white';

//adicionando varios estilos uma unica vez
//style.cssText
var container = document.querySelector('div')
container.style.cssText = 'margin-left: 50%; width:30%; border: 1px solid black'