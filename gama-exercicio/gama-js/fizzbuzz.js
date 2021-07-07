//FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 'FizzBuzz',
//Se não for um número => 'Não é número',
//Se não for divisível nem por 3 e nem por 5 => Entrada,

let resultado = fizzBuzz(30);
console.log(resultado)

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz'
    return entrada;
}