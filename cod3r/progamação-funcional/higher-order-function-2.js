// Função que retorna outra função.

//função que calcula imposto fictício
/*function finalPrice(tax, price){
    return price * (1 + tax)
}

console.log(finalPrice(0.0875, 25.1))*/

//refatorando a função para retornar outra função #1
/*
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    } 
}

console.log(finalPrice(0.0875) (25.1))
console.log(finalPrice(0.0875) (21.7))
console.log(finalPrice(0.0875) (107.9))*/

//refatorando a função para retornar outra função #2
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    } 
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))
