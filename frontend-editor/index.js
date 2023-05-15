var inputFiltro = document.querySelector('header #filter')
var todosCards = document.querySelectorAll('.cards li')

inputFiltro.addEventListener('input', filtraElemento)

function filtraElemento(){
  if(inputFiltro.value != ''){
    for(let card of todosCards){
      let titulo = card.querySelector('h2')
      titulo = titulo.textContent.toLowerCase()
      textoInput = inputFiltro.value.toLowerCase()
      if(!titulo.includes(textoInput)){
        card.style.display = 'none'
      }else{
        card.style.display = 'block'
      }
    }
  }else{
    for(let card of todosCards){
      card.style.display = 'block'
    }
  }
}