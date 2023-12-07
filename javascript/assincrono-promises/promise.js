/**Promise
 * É um objeto JavaScript com a promessa de que algo será realizdo
 * É usado para operações assíncronas
 *  + carregando um arquivo
 *  + leitura de dados de uma API
 * 
 * Uma promessa poderá ser:
 *  -> Pending: estado inicial, assim que o Objeto da promessa é iniciado.
 *  -> Fulfilled: a promessa foi concluída com sucesso.
 *  -> Rejected: a promessa foi rejeitada, houve um erro.
 *  -> Settled: seja com sucesso ou com erro, ela foi finalmente concluída.
 */

let aceitar = false

console.log('pedir uber')

const promessa = new Promise((resolve, reject) =>{
    if(aceitar){
        return resolve('carro chegou!')
    }
    return reject('pedido negado!')
})

console.log('aguardando...')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(()=> console.log('finalizado'))