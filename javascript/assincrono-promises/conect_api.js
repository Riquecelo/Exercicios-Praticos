const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res=>{
    console.log(res.statusCode)
})
/* https.get(API, function(res){
    console.log(res.statusCode)
}) */
console.log('conectando API')