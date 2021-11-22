//Métodos Array

//length/ verifica o comprimento do array
var arr = [1, 2, 3, 4, 5]
console.log(arr.length)

//push/ adiciona elementos ao final do array
arr.push(6)
arr.push("algum")
console.log(arr)
console.log(arr.length)

//pop/ remove elememtos do final do array
arr.pop()
console.log(arr)

//unshift/ adiciona elementos ao início do array
arr.unshift(0)
console.log(arr)

//shift/ retira elementos do início do array
arr.shift()
console.log(arr)

//acessar o último elemento
console.log(arr[arr.length - 1])

//isArray/ verifica se é array
console.log(Array.isArray(arr))

//splice/ adiciona elementos ao meio do array 
arr.splice(2,0,999)
console.log(arr)

//splice/ remove elementos do array
arr.splice(2,1)
console.log(arr)

//indexOf/ mostra o indice do elemento
console.log(arr.indexOf(3))

//join/ converte o array em string
var arr2 = ['tenha', 'um', 'bom', 'dia']
console.log(arr2.join(" "))
console.log(arr2)

//reverse/ inverte os elementos de um array
console.log(arr2.reverse())