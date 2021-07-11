//---declaração de tipos---//
//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 5.5;

//String
const nome: string = 'marcelo';

//Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 345, 456, 46];

//Tuple
let jogadores: [string, string, string];
jogadores = ['Vitor', 'Vanessa', 'Vera'];

//Enum
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[]= [123, 'Mar', false];
const retornoDaAPI2: any = {
    //.....
};

//Void
function printarnaTela(msg: string): void{
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(Object: object){
    //.....
}
criar({
    propriedade: 1
})

//Never
function loopInfinito(): never{
    while (true) {}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

//Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`)
}
exibirNota('10');
exibirNota(10);

//Alias
type Funcionarios = Array<string>;
const funcionarios: Funcionarios =['A', 'B', 'C'];
//outra maneira de usar o Alias
type Carro = {
    nome: string;
    marca: string;
    ano: Date;
}
const carros: Carro[] = [{
    nome: 'Corsa',
    marca: 'BMW',
    ano: new Date()
},{
    nome: 'Camaro',
    marca: 'Chevrolet',
    ano: new Date() 
}];
function mostraCarro(carros: Carro[]){
    for(let carro of carros){
        console.log('Nome do carro: ', carro.nome)
    }
}

//Valores Nulos ou Opcionais
let  altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //o sinal de '?' indica que essa propriedade é opcional e pode ser indefinida
}

const contato: Contato = {
    nome: "A",
    telefone1: '1212322',
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//<number>minhaIdade.toString();

/*const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);*/
