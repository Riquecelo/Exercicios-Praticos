//Funções Anonimas
//IIFE - Immediately Invoked Function Expression
//Função imediatamente invocada
(function(a,b,c){
    let x = 3
    console.log(`Resultado ${a + b + c}`)
    console.log(x)
})(1,2,3);

//No Geral, são usadas sem parâmetros
(function (){
    let x = 300
    console.log(x)
})();

//Com Arrow function
(() => {
    console.log('arrow #01')
})();

//Com Arrow function reduzida
(() => console.log('arrow #02'))();