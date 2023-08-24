const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE
app.set('views', __dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Routes
app.get('/', (req, res) =>{
    res.send ('welcome to an awesome app about bread')
})

// Breads
const breadsController = require ('.controllers/bread_controller')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// Listen
app.listen(PORT, () =>{

})