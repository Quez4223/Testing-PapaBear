const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// CONFIG
const MONGODB_URI = process.env.MONGODB_URI

const app = express()
const PORT = 3003
const DBNAME = 'papabear'



// DATABASE
mongoose.connect(`mongodb://localhost:27017/${DBNAME}` , { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})


const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.use(cors(corsOptions))

app.use(express.json())


// CONTROLLER
const pbController = require('./controllers/papabear_controller.js')


app.use('/Papabear', pbController)



// LISTENER
app.listen(PORT, () => {
    console.log('Hello Papabear')
})