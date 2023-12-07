const axios = require('axios')

Promise.all([
    axios.get('//api.github.com/users/riquecelo'),
    axios.get('//api.github.com/users/riquecelo/repos')
])
    .then(responses => {
        console.log(responses[0].data.login)
        console.log(responses[1].data.length)
    })
    .catch( err => console.log(err.message))