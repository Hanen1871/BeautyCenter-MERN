const mongoose = require("mongoose");


const schema = mongoose.Schema
const ProductSchema = new schema({
img: { type: String, required: true },
name: { type: String, required: true },
description: { type: String, required: true },
price: { type: String, required: true },
category: {
      type: String,
  },
  images:Array
});

module.exports = mongoose.model("products", ProductSchema);