//destructuring tranforma os elementos de um arry ou objetos em variáveis

//destructuring com array
let arr = [1,2,3,4,5,];
let [n1,n2,n3,n4,n5] = arr;
console.log(n5)
console.log(n2)
//console.log()

//destructuring com objetos
const pessoa = {
    nome: 'Marcelo',
    idade: 34,
    profissao:'Programador'
}
let {nome: nomeVar, idade: idadeVar, profissao: profissaoVar} = pessoa;
console.log(nomeVar)

//destructuring com funções. O retorno das funções pode ser encapsulado dentro de variáveis
 function teste() {
     return['teste',45];
 }
 let [varA, varB] = teste();
 console.log(varA)

//ignorando elementos através de espaços vazios
let arrDois = [5,10,15];
const[,dez,qinze] = arrDois;
console.log(dez)

//detructuring com string
let novaString = 'banana';
const [z,x,y] = novaString;
console.log(y)

//rest operator.Adiciona o resto dos elementos em uma única variável
let numeros2 = [1,2,3,4,5,6,7,8,9];
const [um, ...resto] = numeros2;
console.log(um)
console.log(resto)

//atenção
let obj2 = {
    x:100,
    z:200
}
let p,q;
({x:p, z:q} = obj2);