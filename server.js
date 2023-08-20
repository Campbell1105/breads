const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// routes
app.get('/', (req, res) =>{
    res.send ('welcome to an awesome app about bread')
})

app.listen(PORT, () =>{
    
})