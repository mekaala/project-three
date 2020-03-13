const mongoose = require('./connection.js')


const Focus = new mongoose.Schema({
    environment: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
})


module.exports = mongoose.model('Focus', Focus);