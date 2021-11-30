//Evento MouseOver - o ponteiro está em cima do elemento
var titulo = document.querySelector('h1')
titulo.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'yellow'
})

//Evento MouseOut - quando o ponteiro sai de cima do elemento
titulo.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white'
})

//Afetando outro elemento com MouseOuver
var subTitulo = document.querySelector('h2')
subTitulo.addEventListener('mouseover', function(){
    let legenda = document.querySelector('#legenda')
    legenda.classList.remove('hide')
})
subTitulo.addEventListener('mouseout', function(){
    let legenda = document.querySelector('#legenda')
    legenda.classList.add('hide')
})