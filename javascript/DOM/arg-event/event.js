//eventos
//argumento event

const el = document.querySelector('span')

/* el.onkeydown = function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
} */

el.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
})