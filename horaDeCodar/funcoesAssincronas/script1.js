//exemplo prático de função async
function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function showUsername(id){

    const user = await getUser(id)
    console.log(user)
    console.log(`O nome do usuario é: ${user.data.first_name}`)
    let mostraNome = document.querySelector('span')
    mostraNome.innerHTML = `${user.data.first_name}`
}
showUsername(3)