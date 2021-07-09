const alunasGama = ["Zazá","Lulu","Lala","Nina","Paty"]

console.log(alunasGama[0])

//operador spread(...)
const alunaXp = [...alunasGama, 'Jéssica']

console.log(alunaXp)

//----metodos de iteração---//
//map
alunaXp.map(aluna => console.log(aluna))

//filter
const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)

//reduce -> reduz o array a uma operação matematica
const numbers = [1,34,35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
})
console.log(soma)