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

module.exports = router
