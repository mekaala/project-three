const mongoose = require('./connection.js')


const Environment = new mongoose.Schema({
 name: String,
 description: String,
})


module.exports = mongoose.model('Environment', Environment);