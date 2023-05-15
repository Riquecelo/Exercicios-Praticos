//Function expression
const increment1 = function(n){
    return n + 1
}

//Arrow Function é uma função Anônima que também é expression
const increment2 = (n) => {
    return n + 1
}

//Arrow Function pode retirar os parenteses
const increment3 = n => {
    return n + 1
}

//Arrow Function reduzida
const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))