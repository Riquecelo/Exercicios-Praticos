//Callback - função que chama outra função
function exibir(num){
    console.log('Resultado da operação é: ' + num)
}

function soma(a,b, callbck){
    let op = a + b;
    callbck(op);
}

function mult(a,b,cb){
    let op = a * b;
    cb(op);
}

soma(2,2,exibir)
mult(9,9,exibir)