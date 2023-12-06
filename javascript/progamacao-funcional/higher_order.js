/*  Higher-order function
        Funções que recebem funções como argumentos
        Funções que poderão retornar outras funções
 */

//Exemplo com .map() JS
const numbers = [2,4,8,16]

const square = n => n*n

const squaredNumber = numbers.map(square)
console.log(squaredNumber)