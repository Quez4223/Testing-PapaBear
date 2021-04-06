const express = require('express')
const app = express()
const PORT = 3003

const pbController = require('./controllers/papabear.js')
app.use('/Papabear', pbController)


app.listen(PORT, () => {
    console.log('Hello Papabear')
})