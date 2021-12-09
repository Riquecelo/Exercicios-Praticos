//Encontrando elemetos em um array

//método includes

let profissoes = ['Médico', 'Programador', 'Advogado'];
console.log(profissoes.includes('Programador'));

if (profissoes.includes('Programador')) {
    console.log("O elemento existe");
}

//método indexOf -> encontra o indece do elemento
console.log(profissoes.indexOf('Programador'));