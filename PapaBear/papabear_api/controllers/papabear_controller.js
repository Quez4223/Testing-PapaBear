const express = require('express')
const papaBear = require('../models/papabear.js')
const Papabear = express.Router()

// NEW
Papabear.get('/', (req, res) => {
    res.send('hello Papa Bear')
})

// EDIT
Papabear.get('/:id/edit', (req, res) => {

})

// DELETE 
Papabear.delete('/:id', (req, res) => {

})

// CREATE
Papabear.post('/', (req, res) => {
    console.log(req.body)
})


// UPDATE 
Papabear.put('/:id', (req, res) => {
    
})


module.exports = Papabear