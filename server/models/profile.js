const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    correct: { 
        type : Number,
        required: true
    },
    incorrect: { 
        type : Number,
        required: true
    },
    quizzes_done: {
        type: Number,
        required: true
    }
})

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile