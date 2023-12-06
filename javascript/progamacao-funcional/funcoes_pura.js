/* Funções Puras:
 *  Não deverá depender de nenhum dado externo a não ser oque foi passado como argumento.
    Não deverá sofrer nenhuma interferência do mundo externo a ela.
    Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novmente.
    Não terá nehum efeito colateral no seu código:
        * não irá modificar nenhum dado.
        * não irá guardar nenhm estado.
 */

// função impura
//Exemplo 1: está dependo de dado externo que não foi passado como parâmetro.
function calculeteCircumference(radius){
    return Math.PI * (radius + radius)
}

//Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarada',
    age: 'jovem'
}

function changeName(name){
    person.name = name
}

//Função pura
//Exemplo 1
const calculateCircumference = function(pi, radius){
    return pi * (radius + radius)
}

//com arrow function
const calculateCircunference = (pi, radius) => pi * (radius + radius)

//Exemplo 2
const changePersonName = (person, name) => ({...person, name})