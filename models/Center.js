const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CenterSchema = new Schema({
    Name: String,
    Adress: String,
    email: String, 
    Phone: Number,
    longitude: Number, 
    latitude: Number

});

module.exports = mongoose.model('Center', CenterSchema); 



