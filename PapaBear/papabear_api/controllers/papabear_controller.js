const express = require('express')
const Papabear = express.Router()
const papaBear = require('../models/papabear')

// INDEX
// Papabear.get('/', (req, res) => {
//     papaBear.find({}, (err, foundTask))
//     res.send('hello Papa Bear')
// })

// SEED
Papabear.get('/seed', (req, res) => {
    papaBear.create(
        [
            {
                task: ''
            }
        ]
    )
})

// CREATE
Papabear.post('/', (req, res) => {
    papaBear.create(req.body, (err, createdTask) =>{
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).send(createdTask)
    })
    console.log(req.body)
})

// UPDATE 
Papabear.put('/:id', (req, res) => {
    papaBear.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).json(updatedTask)
    })
    
})


// DELETE 
Papabear.delete('/:id', (req, res) => {
    papaBear.findByIdAndRemove(req.params.id, (err, deletedTask) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).json(deletedTask)
    })

})


module.exports = Papabear