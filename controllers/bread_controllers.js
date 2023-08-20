const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Index
breads.get('/', (req, res) => {
//res.send(Bread)
res.render('index')
})

breads.get('/:arrayIndex', (req, res) =>{
    res.send(bread[req.params.arrayIndex])
})

module.export = breads