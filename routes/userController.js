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

module.exports = router
