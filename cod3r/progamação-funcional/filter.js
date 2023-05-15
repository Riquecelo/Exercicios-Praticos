//Função Filter -> retorn um array com elementos filtrados de acordo com a condição estabelecida.
const numbers = [1, 2, 3, 4, 6]

const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 === 0;

console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

const students = [
    {name:'Jake', score:6.4},
    {name:'Susan', score:8.6},
    {name:'Emma', score:9.4},
    {name:'Peter', score:9.1}
]

const greatStudent = student => student.score >= 9;
console.log(students.filter(greatStudent))
console.log(students)