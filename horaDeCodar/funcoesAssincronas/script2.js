//Async e Await possui o conceito de Promise

function primeiraFunção(){

    return new Promise((resolve) => {
        
        setTimeout(() => {
            console.log('Esperou isso aqui!')
            resolve()
        }, 500)
    })
}
//primeiraFunção()

async function segundaFuncao(){
    console.log('Iniciou')

   await primeiraFunção()

    console.log('Terminou')
}

segundaFuncao()

