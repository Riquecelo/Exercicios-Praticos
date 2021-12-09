//Removendo elementos de um array

//pop -> remove do fim do array
let arr = [1, 2, 3, 4];
let remover = arr.pop();
//console.log(arr);
//console.log(remover);

//shift -> remove no começo do array
let nomes = ['João', 'Pedro','Marcelo']
let removeNome = nomes.shift();
//console.log(nomes);
//console.log(removeNome);

//splice -> remove pelo indice do elemento
let numb = [1, 2, 3, 4, 5];
let removNumb = numb.splice(1,1)

console.log(numb)
console.log(removNumb)