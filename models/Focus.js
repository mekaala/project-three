const mongoose = require('./connection.js')


const Focus = new mongoose.Schema({
    environment: String,
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: String
})


module.exports = mongoose.model('Focus', Focus);