const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        userName: {
            type: String,
            required: true,
            unique: true
        },
        passWord: {
            type: String,
            required: true,
        },
        firstName: String,
        lastName: String,
    },
    {
        timestamps: {}
    }
)

module.exports = {
    UserSchema
}