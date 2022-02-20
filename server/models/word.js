const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    word: {
        type: String,
        required: true
    },
})

const Word = mongoose.model('word', wordSchema);

module.exports = Word