const express = require('express')
const Papabear = express.Router()

Papabear.get('/', (req, res) => {
    res.send('<h1> hello Papa Bear </h1>')
})


module.exports = Papabear