/* 
- guardar em cápsula 
- agrupamento de funções e variáveis
- escoder detalhes de implementação
- camada de segurança para os atribuos e métodos
*/

class Poligono{
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    //método encapsulado
    #calcularArea(){
        return this.altura * this.largura
    }
}

const poli = new Poligono(50, 60)
console.log(poli.area)