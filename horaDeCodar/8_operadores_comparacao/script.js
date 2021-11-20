/*Operadores de comparação */
//São usados em estruturas de condição.
//operadores: ==, !=, >, <, >=, <=.
//operações de comparação obtem-se valores verdadeiros ou falsos.
/**
 * operador de tipo e valor ===, !==
 */
var idade = 18;
var carro1 = 0;
var carro2 = 1;

if (idade >= 18) {
    console.log('Usuário pode tirar carteira de motorista')
}

if (idade <= 17) {
    console.log('Usuário não pode tirar carteira de motorista')
}

if (carro1) {
    console.log('Carro Um existe')
}
if (carro2) {
    console.log('Carro Dois existe')
}

/**
 * operador lógico && (end)
 */

var idad = 10;
var nome = 'Carlos';
var matriculado = false;

if (nome == 'Marcelo' && idad == 16) {
    console.log(nome+ ' está matriculdo na aula')
}else{
    console.log(nome+ ' não está matriculado')
}

/**
 * operador lógico || (or)
 */

if (matriculado == true || idad == 16) {
    console.log('Está matriculado, pode assistir a aula')
}else{
    console.log('Não está matriculado, ainda da tempo de fazer sua matricula')
}

/**
 * operador lógico ! (not)
 */

if (!false) {
    console.log("Passou")
}

nome = "Santos";

if (!(nome == "Marcelo")) {
    console.log("ok")
}