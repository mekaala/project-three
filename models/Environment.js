const mongoose = require('./connection.js')


const Environment = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
})


module.exports = mongoose.model('Environment', Environment);