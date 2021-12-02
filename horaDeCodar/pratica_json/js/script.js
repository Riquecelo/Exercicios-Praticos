//objeto em javascript
const objs = [
    {
        nome:"Marcelo",
        idade:34,
        esta_trabalhando: true,
        hobbies: ["programar", "ler", "ver séries"],
        estudos:{
            Ensino_Superior: "Trancado",
            Faculdade: "Ufra",
            Curso: "Licenciatura da Computação"
        }
    },
    {
        nome:"José",
        idade:34,
        esta_trabalhando: true,
        hobbies: ["programar", "ler", "caminhar"],
        estudos:{
            Ensino_Superior: "Trancado",
            Faculdade: "Ufra",
            Curso: "Licenciatura da Computação"
        }
    }   
]

console.log(objs)

//JSON
//convertendo objeto para JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)

//acessando ao objeto convertido
objData.map((pessoa) => {
    console.log(pessoa.nome)
})