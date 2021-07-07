/*var mes ="janeiro";

switch(mes){

    case "janeiro":
        console.log('encontrei')
        break;
    default:
        console.log('não encontrei')
}*/
/*
var colors = ["preto", "branco", "amarelo", "verde", "azul"];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

var i =1;

while (i <= 10){
    console.log(i);
    i++
}
 do{
     console.log(i);
     i++;
 }while(i < 10);*/

 class Book {
     constructor(title, author,pages){
         this.title = title;
         this.author = author;
         this.pages = pages;
     }

     read() {
         return `Estou lendo ${this.title}`
     }
 }
/*
 let book = new Book('Pai Rico e Pai Pobre', 'Robert Kiozaki', 400);
 let otherbook = new Book('Segredos da Mente Milionária', 'Thin Rave Heker', 300);

 console.log(book)
 console.log(book.read())
 console.log(otherbook)*/
 class ITBook extends Book{
     constructor(title, author, pages, technology){
         super(title, author, pages);
         this.technology = technology
     }
 }

 let itBook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmo');

 console.log(itBook);

 class Person {
     constructor(name){
         this._name = name;
     }
      get name(){
          return this._name;
      }
      set name(value){
          return this._name = value;
      }
 }

 let person = new Person('Marcelo');
 person.name = 'Santos'
 console.log(person.name)

 // conversor de temperartura
 function convertToFahrenheit(value){
     return value * 1.8 + 32
 }
 let result = convertToFahrenheit(23)
 console.log(`o valor em Fahrenheit e ${result}`)