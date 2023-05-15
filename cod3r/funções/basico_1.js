
// Function Declaration
function bomDia(){
    console.log('bom dia!')
    //função sem retorno
}
var x = bomDia() 
//console.log(x) // undefined, ou seja, não há retorna da função

// Function Expression
const boaTarde = function(){
    console.log('boa tarde!')
    //função sem retorno
}
boaTarde()
console.log('------------')

// Flexibilidade na passagem de parâmetros
function somar (a,b){
    return a + b;
} 
let resultado = somar(3,4)
console.log(resultado)

resultado = somar(5,5,5)//os parâmetros excedentes são ignorados
console.log(resultado)

resultado = somar(5)// a soma de um número com undefined
console.log(resultado)//retornará NaN
console.log('------------')

// Flexibilidade de definir valores padrão aos parâmetros
function somar2 (a = 0, b = 0){
    return a + b;
} 

var result = somar2(6,6)
console.log(result)

result = somar2(6)
console.log(result)

result = somar2(9,9,9)
console.log(result)