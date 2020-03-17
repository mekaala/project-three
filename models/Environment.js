const mongoose = require('./connection.js')


const Environment = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: String
})


module.exports = mongoose.model('Environment', Environment);