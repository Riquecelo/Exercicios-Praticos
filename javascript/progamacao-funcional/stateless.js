/*Stateless
* não guarda estado.
* a função só conhece dados entregues a ela.
* a resposta não poderá variar.*/

let number = 2;

//statefull function
function square(){
    return number * number
}

number = square()

//stateless function
const square = n => n * n;