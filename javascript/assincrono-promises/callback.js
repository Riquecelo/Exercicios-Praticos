//Função callback => chama outra função de volta
//Funções aceitam qualquer tipo de dado como argumento
function imprimaDado(dado){
    console.log(dado())
}

imprimaDado(function(){
    return 'Ola mundo!'
})

function apresentar(){
    return 'Me chamo Marcelo'
}

imprimaDado(apresentar)


/* function apresentar(){
    return 'Me chamo Marcelo'
} */