require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', err => {
    console.log(err);
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})

app.use(express.static(`${__dirname}/client/build`))

app.use(logger('dev'))
app.use(bodyParser.json())

const userController = require('./routes/userController')
app.use('/api/users', userController)

app.get('/*', (req, res) => {
    res.sendFile`${__dirname}/client/build/index.html`
})

// app.get('/', (req, res) => {
//     res.send('hello world!')
// })

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`App is up and running on http://localhost:${PORT}`)
})