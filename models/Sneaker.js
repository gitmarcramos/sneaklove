const {model, Schema} = require("mongoose");

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  category: { type: String, enum: [men, women, kids]},
  id_tags: [ObjectId]
});

const sneakerModel = model("sneakers", sneakerSchema);

module.exports = sneakerModel;