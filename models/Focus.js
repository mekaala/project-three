const mongoose = require('./connection.js')


const Focus = new mongoose.Schema({
 name: String,
 description: String,
})


module.exports = mongoose.model('Focus', Focus);