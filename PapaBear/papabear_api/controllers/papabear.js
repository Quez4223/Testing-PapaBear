const express = require('express')
const Papabear = express.Router()

// NEW
Papabear.get('/', (req, res) => {
    res.send('hello Papa Bear')
})

// EDIT
Papabear.get('/:id/edit', (req, res) => {
    
})


module.exports = Papabear