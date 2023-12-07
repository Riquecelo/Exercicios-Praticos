//Tem o mesmo conceito de promises
fetch('https://api.github.com/users/riquecelo')
    .then( response => response.json())
    .then( data => fetch(data.repos_url))
    .then( repo => repo.json())
    .then( d => console.log(d))
    .catch(err => console.log(err))