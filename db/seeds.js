require('dotenv').config()
const mongoose = require('mongoose')
const { User } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', err => {
    console.log(err);
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})

const saved = async () => {
    await User.remove()
    const tony = new User({
        email: 'tonycimaglia@gmail.com',
        userName: 'tonyCimaglia',
        passWord: 'password',
        firstName:'Tony',
        lastName: 'Cimaglia'
    })
    await tony.save()
    const eva = new User({
        email: 'evacimaglia@gmail.com',
        userName: 'evaCimaglia',
        passWord: 'password',
        firstName:'eva',
        lastName: 'Cimaglia'
    })
    await eva.save()
    db.close()
}

saved()