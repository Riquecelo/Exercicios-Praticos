const axios = require('axios')

axios.get("https://api.github.com/users/riquecelo")
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos))
    .catch(error => console.log(error))