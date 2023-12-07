//1° modo
/* fetch('https://api.github.com/users/riquecelo')
    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    .then(d => console.log(d.length))
    .catch(e => console.log(e)) */

//2° modo
/* async function start(){
    const response = await fetch('https://api.github.com/users/riquecelo')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos.length)
} */

//3° modo
/* async function start(){
    try {
        const response = await fetch('https://api.github.com/users/riquecelo')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos.length)
    } catch (error) {
        console.log(error)
    }
} */

//4° modo
/* async function start(){
    try {
        const user = await fetch('https://api.github.com/users/riquecelo').then(r => r.json())
        const repos = await fetch(user.repos_url).then(r => r.json())
        console.log(repos.length)
    } catch (error) {
        console.log(error)
    }
}
start() */

//5° modo
async function start(){
    const Url = 'https://api.github.com/users/riquecelo';
    const user = await fetch(Url).then(r => r.json());
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos.length)
}

start().catch(e => console.log(e))