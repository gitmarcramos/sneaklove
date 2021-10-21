const {model, Schema} = require("mongoose");

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  category: { type: String, enum: ["men", "women", "kids"]},
  id_tags: {
    type: Schema.Types.ObjectId,
    ref: "sneakers"
  },
  image: { type: String, default: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2806d478350973.5ca28ba9c3f64.jpg"}
});

const sneakerModel = model("sneakers", sneakerSchema);

module.exports = sneakerModel;