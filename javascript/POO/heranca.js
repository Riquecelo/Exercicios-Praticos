/*
- objetos podem herdar, ou estender, caracteristicas bases de outro objeto
- isso é uma cópia de atributos e métodos de outra classe
 */

//classe Pai
class Veiculo{
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

//classe Filho
class Moto extends Veiculo{
    constructor(){
        super() //puxa atributos e métodos do pai
        this.rodas = 2
    }
}