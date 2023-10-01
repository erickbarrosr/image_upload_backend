const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicturesSchema = new Schema({
  name: { type: String, require: true },
  source: { type: String, require: true },
});

module.exports = mongoose.model("Picture", PicturesSchema);
