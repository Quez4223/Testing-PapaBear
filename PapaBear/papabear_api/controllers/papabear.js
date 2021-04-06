const express = require('express')
const Papabear = express.Router()

Papabear.get('/', (req, res) => {
    res.send('hello')
})


module.exports = Papabear