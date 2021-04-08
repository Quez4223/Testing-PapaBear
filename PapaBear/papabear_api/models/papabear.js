const mongoose = require('mongoose')
const PAPABEAR = require('../controllers/papabear_controller')

const pBearSchema = new mongoose.Schema({
    task: { type: String, required: true },
    notes: { type: String, required: true }
})


const PapaBear = mongoose.model('PapaBear', pBearSchema)


module.exports = PapaBear