/*
Quando um objeto estende de outro(herença) talvez haja a necessidade de reescrever uma ou mas características
(atributos ou métodos) nesse novo objeto.

podemos recriar um ou mais métodos da classe herdade com Polimorfismo
*/

class Atleta{
    peso;
    categoria;

    constructor(peso){
        this.peso = peso
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = 'infantil'
        }
        else if(this.peso <= 65){
            this.categoria = 'juvenil'
        }
        else{
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta{
    constructor(peso){
        super(peso)
    }
    definirCategoria(){
        if(this.peso <= 54){
            this.categoria = 'leve'
        }
        else if(this.peso <= 60){
            this.categoria = 'médio'
        }
        else{
            this.categoria = 'pesado'
        }
    }
}

const atleta = new Atleta(55)
console.log(atleta.definirCategoria())
