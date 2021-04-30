const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CenterSchema = new Schema({
    Name: String,
    Adress: String,
    email: String, 
    Phone: Number,
    log: Number, 
    lat: Number

});

module.exports = mongoose.model('Center', CenterSchema); 