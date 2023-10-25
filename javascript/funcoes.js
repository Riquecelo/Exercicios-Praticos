//Funções servem para agrupar e reutilizar códigos

//declarar uma função
function criandoFrases(){
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

//criandoFrases()

//Função anônima ou expression

//recebendo parâmetros na função
const sum = function(numberA, numberB){
    console.log(numberA + numberB)
} 

//sum(3, 2)//passando argumentos para a função

//Retornndo valores
const sum2 = function(number1, number2){
/*     console.log(number1 + number2);*/    
    let total = number1 + number2
    return total
}

let number11= 34;
let number22= 25;
//console.log( ` a soma é:  ${sum2(number11, number22)} `)

//Escopo de Função
let subject = 'novo'

function createThink(subject){//se o parâmetro não for declarado o subject ira reatribuir 
    subject = 'study' //se o parâmetro for não precisa declarar a vaiável subject
  //let subject = 'study' //se o parâmetro não for declarado é  necessario declarar a variável
    return subject
}

console.log(subject)
createThink();
console.log(createThink())
console.log(subject)
