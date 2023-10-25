//throw - lançar

function sayMyName(name=''){
    if(name ===''){
        throw 'Nome é obrigatório'
    }

    console.log("dentro da função")
}

//try(tentar).....catch(pegar)
try{
    sayMyName()
}catch(e){//recebe o evento de throw
    console.log(e)
}

console.log("\n após o erro")