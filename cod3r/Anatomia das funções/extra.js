//exemplo de função recursiva
function fatorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return (n * fatorial(n - 1))
    }
}
//a = fatorial(3)
//console.log(a)

//exemplo de função aninhada
var nome = 'Marcelo';

function getScore(){
    var num1 =2,
        num2 =3;
    function add(){
        return nome + " scored " + (num1 + num2)
    }
    return add();
}
console.log(getScore())