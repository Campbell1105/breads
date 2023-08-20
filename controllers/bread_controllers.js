const express = require('express')
const breads = express.Router()

// Index
breads.get('/', (req, res) => {
res.send('this is the index at /breads')
})

module.export = breads