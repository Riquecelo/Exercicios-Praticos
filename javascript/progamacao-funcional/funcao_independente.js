/** Funções Independentes:
 *  deverá ter ao menos um argumento
 *  deverá retornar algo
 *  nada que acontece dentro da função afeta o mundo externo:
 *      dados imutáveis
 *      não guarda estado
 *  não faz uso de loops(for, while), mas se houver necessidade de tal, 
 * usa-se recursão (função chamando ela mesma)
 */

const random = (number, Math) => Math.floor(Math.random() * number)

//console.log(  random(10, Math))

const fatorial = x => {
    if(x == 0 ){
        return 1
    }
    return x * fatorial(x - 1)
}

console.log(fatorial(2))