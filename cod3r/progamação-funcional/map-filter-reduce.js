const students = [
    {name:'Jake', score:6.4},
    {name:'Susan', score:8.6},
    {name:'Emma', score:9.4},
    {name:'Peter', score:9.1}
]

const greatStudent = student => student.score >= 9;
const getScore = el => el.score;
const avg = (acc, el, i, array) =>{
    if(i == array.length - 1){
        return (acc + el) / array.length
    }else{
        return acc + el
    }
}

console.log(
    students
        .filter(greatStudent) //filtra os bons estudantes
        .map(getScore) //pega as notas dos estudantes
        .reduce(avg) //verifica a média
)