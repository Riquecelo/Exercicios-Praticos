// 1) passar uma função para outra função
function bomDia (){
    console.log('Bom Dia !!!')
}

const boaTarde = function(){
    console.log('Boa Tarde !!!')
}

function executarQualquerCoisa(fn){
    if(typeof fn === 'function'){
        //console.log(typeof fn)
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa('function')
executarQualquerCoisa(bomDia())
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)


// 2) Retornar uma função apartir de outra função
function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)