//podemos manipular textos com métodos string

//length/comprimento.Podemos ver o comprimento da string
var nome = "Marcelo"
console.log(nome.length)

//indexOf/localiza o index do caractere
console.log(nome[0])

//indexOf/localiza palavras dentro de frases
var frase = "O rato roeu a roupa do rei de Roma"
console.log(frase.indexOf('rei'))
console.log(frase[1])

//slice/ retira elementos da frase
var fora = frase.slice(0, 6)
console.log(fora)
console.log(frase)

//replace/ troca elementos por outros(substitui)
var novaFrase = frase.replace('O rato', 'A peste')
console.log(novaFrase)

//toLowerCase/deixa as letras em caixa baixa
console.log(frase.toLowerCase())

//toUpperCase/deixa as letras em caixa alta
console.log(frase.toUpperCase())

//trim/elimina espaços vazios
var outraFrase = '    mundo!'
console.log(outraFrase)
var fraseTrim = outraFrase.trim()
console.log(fraseTrim)
console.log(outraFrase.trim())

//split/converte frases em arry
console.log(nome.split(""))
console.log(frase.split(' '))

var tags = "PHP, JavaScript, HTML, CSS"
console.log(tags.split(' '))

//lastIndexOf/pega o ultimo elemento
console.log(frase.lastIndexOf("Roma"))