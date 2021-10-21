const {model, Schema} = require("mongoose");

const tagSchema = new Schema({
  label: String
});

const tagModel = model("tags", tagSchema);

module.exports = tagModel;