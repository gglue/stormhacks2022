const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    difficult: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const Quiz = mongoose.model('quizz', quizSchema);

module.exports = Quiz