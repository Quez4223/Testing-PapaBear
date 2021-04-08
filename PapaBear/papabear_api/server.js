const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIG
const MONGODB_URI = process.env.MONGODB_URI

const app = express()
const PORT = 3003
const db = mongoose.connection

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// DATABASE
mongoose.connect(MONGODB_URI, { useNewUrlParser: true}, {useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// CONTROLLER
const pbController = require('./controllers/papabear_controller.js')
app.use('/Papabear', pbController)



// LISTENER
app.listen(PORT, () => {
    console.log('Hello Papabear')
})