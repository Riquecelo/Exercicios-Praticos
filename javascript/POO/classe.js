/* As classes na orientação a objetos funciona como molde para os bjetos
Os objetos são criados a partir de uma clase e muitos deles podem ser feitos da mesma classe.
O ato de criar um objeto através de uma classe é chamado de Instância. */

// definr classe
class Pessoa{
    constructor(nome){
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }
}

//criar objeto
const pessoa = new Pessoa('Marcelo')
console.log(pessoa.nome + '  ' + pessoa.id)
