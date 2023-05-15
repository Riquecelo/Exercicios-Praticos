//Higher-order function -> permite que uma função chame outras funções, exemplo passar uma função como parâmetro ou retornar uma função.

// Passando função como parâmetro #1
function run(fn){
    return fn()
}

function sayHello(){
    console.log('Hello!!')
}

run(sayHello)

// Passando função anônima como parâmetro #2
run(function(){
    console.log('run!!!')
})

//Passando funções nativas da linguagem #3
//para isso a função principal precisa ter retorno e a invocação precisa estar armazenada em uma variável.
const resultado = run(Math.random)
console.log(resultado)
