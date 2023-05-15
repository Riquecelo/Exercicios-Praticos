//Passagem de parâmetros
function logParams(a,b,c){
    console.log(a,b,c)
}
/*logParams(1,2,3,4,5)
logParams(1,2,3)
logParams(1,2)
logParams(1)
logParams()*/

//Definindo valores padrão para os parâmetros
function defaultParams(a = 0 , b = 0, c = 0){
    console.log(a,b,c)
}
defaultParams(7,8,9)
/*defaultParams(7,8)
defaultParams(0,8)*/

//Maneiras de passar parâmetros de forma flexível
//usando array
function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}
//passando um array na invocação da função
logNums([1,2,3])

//Usando Spred/rest
function logNums2(...nums){
    console.log(Array.isArray(nums))
    console.log(nums)
    /*for(let n of nums){
        console.log(n)
    }*/
}
logNums2(1,2,3,4,5)

function sumAll(...nums){
    let n = 0;
    for(let i of nums){
        n += i
    }
    console.log(n)
}
sumAll(1,2,3,4,5,6,7,8,9,10)