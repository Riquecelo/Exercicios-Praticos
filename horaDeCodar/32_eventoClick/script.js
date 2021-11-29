//Evento Click - é ativado ao clique em um elemento selecionado
var btn = document.querySelector('#btn');
console.log(btn)
/*addEventListener 
    - função que adiciona o evento.
    - primeiro parametro nome do evento.
    - segundo parametro uma função(callback)
*/
btn.addEventListener('click',function(){
    console.log('clicou')
    console.log(this)
    this.style.color = 'red'
})

//click afetando outros elementos
var titulo = document.querySelector('h1')
titulo.addEventListener('click', function(){
    let subtitulo = document.querySelector('h2')
    subtitulo.style.display = 'none'
})

var btnAtivar = document.querySelector('#btn2')
btnAtivar.addEventListener('click', function(){
    let subtitulo = document.querySelector('h2')
    subtitulo.style.display = 'block'
})

//double click
var outroBtn = document.querySelector('#btn3')
outroBtn.addEventListener('dblclick', function(){
    this.style.cssText = 'background: blue; color: white;'
    console.log('clique duplo')
})