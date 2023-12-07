const axios = require('axios')

async function fetchRepos(){
    try {
        const user = await axios.get('https://api.github.com/users/riquecelo')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.length)
    } catch (error) {
        console.log(error)
    }
}

fetchRepos()