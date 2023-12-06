/*Abstração
É um template ou identidade de uma classe que será construida no futuro
- atributos e métodos podem ser criados na classe de Abstração(Superclasse), porém
a implementação dos métodos , só podera ser feita na classe que irá herdar essa Abstração
 */

class Parafuso{
    constructor(){
        if(this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada')
    }
    get tipo(){
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso{
    constructor(){ super() }
    get tipo(){
        return 'fenda'
    }
}

class Philips extends Parafuso{
    constructor(){ super() }

    get tipo(){
        return 'Philips'
    }
}

class Allen extends Parafuso{}


// criar e usar
//new Parafuso() // classe abstrata não pode ser instanciada

let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)