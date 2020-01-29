const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    id: {
        type: Number
    },
    name: {
        type: String

    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: 0
    }
})

const User = mongoose.model('users',UserSchema)

module.exports = User