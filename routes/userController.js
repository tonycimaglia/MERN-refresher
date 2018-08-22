const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users)
    }).catch((error) => {
        console.log(error)
    })
})

router.post('/', async (req, res) => {
    try {
        const newUser = req.body
        const savedUser = await User.create(newUser)
        res.json(savedUser)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        res.json(user)
    }   catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const updatedUser = req.body
        const savedUser = await User.findByIdAndUpdate(userId, updatedUser)
        res.json(savedUser)
    }   catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        await User.findByIdAndRemove(userId)
        res.json({
            msg: 'Successfully Deleted'
        })
    }   catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
