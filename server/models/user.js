const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email : {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please eneter a password'],
        minlength: [8, 'Password needs to be at least 8 characters']
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User