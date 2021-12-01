//Usando evento Keydown - verifica quando uma tecla é precionada
document.addEventListener('keydown', function(Event){
    //console.log(Event.key)
    if (Event.key === 'Enter') {
        console.log('Apertou Enter')
    }
})

//Usando evento Keyup -  verifica quando uma tecla é solta
document.addEventListener('keyup', function(Event){
    if (Event.key === 'Enter') {
        console.log('Soltou o Enter')
    }
})