const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CenterSchema = new Schema({
  name: String,
  adress: String,
  email: String,
  phone: Number, 
  longitude: Number,
  latitude: Number,
});

module.exports = mongoose.model("Center", CenterSchema);
