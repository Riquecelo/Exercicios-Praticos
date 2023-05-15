//Arrow Function -> são funções anonimas
const msg = () => console.log('Feliz Natal!!!')
msg()// automaticamente retornável

const saudacao = nome =>`Olá ${nome}, bem vindo!`
console.log(saudacao('João'))// automaticamente retornável

const somar = numeros => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}
console.log(somar([1,2,3]))

 // '...' operador Spread 
//aqui com esse operador, ocorre o rest, pega todos os parametros e adicioana num array
const somar2 = (...numeros) => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}
console.log(somar2(1,2,3,4))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))