//somar(3)(4)(5)
function somar(a){
    return function(b){
        return function(c){
            return x = a+b+c
        }
    }
}
res = somar(1)(2)(3)
console.log(res)

//calcular(3)(7)(fn)
//fn -> 3*7


function calcular(v1){
    return function(v2){
        return function(fn){                            
            return fn(v1,v2)
        }
    }
}

function mult(x, y){
    return x * y
}            

console.log(calcular(3)(4)(mult))