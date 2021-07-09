//template String
"Marcelo"

let frase = 'está no Hiring Coders!'
console.log(`Marcelo ${frase}`)

//operador ternário

function idadePessoa(num){
    let idade = num;
   /* if(idade > 18){
        return 'maior de idade, assuma seus atos!'
    }else{
        return 'menor de idade, onde está seus responsáveis!'
    }*/
    return idade >= 18 ? 'maior de idade, assuma seus atos!' : 'menor de idade, onde está seus responsáveis!'
}
console.log(idadePessoa(33))

//arrow function

function soma1(a,b){//exemplo de função tradicional
    return a+b;
}
console.log(soma1(3,5))

// exemplo de arrow function
const soma2 = (num1, num2) => num1 + num2
console.log(soma2(5,5))
//exemplo 2 
const ola = (nome) => `Olá! ${nome}`
console.log(ola('Cristina'))