const express = require("express")
const breads = express.Router()
const Bread = require("../models/bread.js")

// Index
breads.get("/", (req, res) => {
  //res.send(Bread)
  res.render("index", { breads: Bread });
})

breads.get("/:arrayIndex", (req, res) => {
  // res.render('index',{breads: Bread[req.params.arrayIndex]})
  res.render('show', {
    bread: Bread[req.params.arrayIndex]
  })
})

module.export = breads;
