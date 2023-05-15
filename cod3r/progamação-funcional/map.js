//Função Map sempre retorna um novo array
const numeros = [1, 2, 3, 4, 5, 6]

//função map recebe como parâmetro fn anônima
/*const numerosV2 = numeros.map(function(el){
    return el *2
})*/

//pode ser feita com arrow function
/*const numerosV2 = numeros.map((el) => {
    return el *2
})*/

//forma reduzida
const numerosV2 = numeros.map(el => el * 2)

console.log(numerosV2)
//com for
/*
const numerosV3 =[]
for(let n of numeros){
    numerosV3.push(n * 3)
}

const numerosV4= []
for(let i = 0; i< numeros.length; i++){
    numerosV4.push(numeros[i] * 4)
}

console.log(numerosV2 + '\n' + numerosV3 + '\n' + numerosV4 )*/

const students = [
    {name:'Jake', score:6.4},
    {name:'Susan', score:8.6},
    {name:'Emma', score:9.4},
    {name:'Peter', score:9.1}
]

const pegaNota = students.map(el => el.score)
const getScore = el => el.score
const notaFinal = students.map(getScore).map(Math.ceil)
console.log(notaFinal)

//Math.floor aredonda para baixo
//Math.ceil aredonda para cima