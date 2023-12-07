//import axios from "axios";
const axios = require('axios')

axios.get("https://api.github.com/users/riquecelo")
    .then((res) => {
        console.log(res.data)
    })