var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(reportsSchema = new Schema({
  location_id: Number,
  unique_id: Number,
  lat: Number,
  lon: Number,
  day: Date,
  safeness_rate: String,
  comments: String,
})),
  (Reports = mongoose.model("Reports", reportsSchema));

module.exports = Reports;
