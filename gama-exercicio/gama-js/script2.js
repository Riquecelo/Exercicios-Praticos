// imprima na tela os números pares de 0 a 100
 /*for(var i = 0; i <= 100; i++){
     if(i % 2 === 0){
         console.log(i)
     }
 }*/

 //crie um algoritmo que receba tres notaas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação.

 function calculaMedia(nota1,nota2,nota3){
    let media = (nota1+nota2+nota3)/3

    if(media >= 7){
        return'aprovado'
    }

    if(media >= 5  && media < 7){
        return'recuperação'
    }

    if(media < 5){
        return'reprovado'
    }
 }

console.log(calculaMedia(5,5,4))