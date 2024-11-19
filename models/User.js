const mongoose = require("mongoose");


const schema = mongoose.Schema
const UserSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type :String,
 
    },
    category: {
        type: String,
default:"user" 
    },
    image: String
})

module.exports = mongoose.model("user", UserSchema);