const pilotos = ['Senna',  'Prost', 'Schumacher', 'Hamilton']

//acessando o array pela posição
console.log(pilotos[0])
console.log(pilotos[3])

//comprimento do array
console.log(pilotos.length)

//iterável
for (let piloto of pilotos){
    console.table(piloto)
}

//adicionando elementos
pilotos.push('Alonso')
console.table(pilotos)

//buscando um elemento com find
const alonso = pilotos.find(piloto => piloto === 'Alonso')
console.log(alonso)

const outroPiloto = pilotos.find(function(ele){
    return ele == 'Schumacher'
})
console.log(outroPiloto)

//deletando um elemento com splice
//pilotos.splice(2,2)
console.table(pilotos)