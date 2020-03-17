const mongoose = require('./connection.js')


const Relax = new mongoose.Schema({
    environment: String,
    name: {type: String, required: true},
    description: {type: String, required: true},
})


module.exports = mongoose.model('Relax', Relax);