const mongoose = require('./connection.js')


const Relax = new mongoose.Schema({
 name: String,
 description: String
})


module.exports = mongoose.model('Relax', Relax);