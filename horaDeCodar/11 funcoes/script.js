/**
 * função nomeada
 */
function primeiraFuncao() {
    console.log('Hello Word das funções')
}
primeiraFuncao()

// função com parametros
function dizerNome(nome) {
    console.log('O nome é: ' + nome)
}
dizerNome("Marcelo")

//função com return
function soma(a, b) {
    var soma = a + b;
    return soma
}
var somaUm = soma(4,5)
console.log(somaUm)
console.log(soma(5,6))