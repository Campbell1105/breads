const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Routes
app.get('/', (req, res) =>{
    res.send ('welcome to an awesome app about bread')
})

// Breads
const breadsController = require('.controllers/bread_controller')
app.use('/breads', breadsController)

// Listen
app.listen(PORT, () =>{

})