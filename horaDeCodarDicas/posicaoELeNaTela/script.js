//obtendo a posição do elemento na tela com JavaScript

//1 selecionar elemento
var box = document.getElementById('box')
console.log(box)

//getBoundingClientRect verifica as cordenadas e posição do elemento
var coordenadas = box.getBoundingClientRect();
console.log(coordenadas)

if (coordenadas.x === 25) {
    alert('Chegou no 25!')
}
