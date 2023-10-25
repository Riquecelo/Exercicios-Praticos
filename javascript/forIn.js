//for...in
//ideal para objetos - percorre as chaves do objeto

let person = {
    name: 'João',
    age: 35,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}