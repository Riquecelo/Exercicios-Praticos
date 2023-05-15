// Function declaretion

// Função sem parâmetro e sem retorno
function sayhello(){
    console.log("Hello!")
}

sayhello()

// Função com parâmetro sem retorno
function sayHelloTo(name){
    console.log("Hello " + name)
    console.log(`Hello ${name}!`)
}

sayHelloTo("Marcelo")

// Função sem parâmetro com retorno
function returnHi(){
    return "Hi!"
}

var greeting = returnHi()
console.log(greeting)
console.log(returnHi())

// Função com parâmetro e com retorno
function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Henrique'))