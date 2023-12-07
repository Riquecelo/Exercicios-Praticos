const promesa = new Promise(function(resolve, reject){
    return resolve('ok')
})

async function start(){
    try {            //await-esperando
        const result = await promesa
        console.log(result)
    } catch (error) {
        console.log(error)
    }finally{
        console.log('rodar sempre')
    }
}
start()

/* promesa
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('sempre irei executar')
    }) */