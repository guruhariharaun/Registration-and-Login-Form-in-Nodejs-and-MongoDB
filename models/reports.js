var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(reportSchema = new Schema({
  report_id: Number,
  user_id: Number,
  lat: String,
  lon: String,
  day: String,
  comments: String,
})),
  (Report = mongoose.model("Report", reportSchema));

module.exports = Report;
