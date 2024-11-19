const mongoose = require("mongoose");

const schema = mongoose.Schema
const ServicesSchema = new schema({
img: { type: String, required: true },
name: { type: String, required: true },
description: { type: String, required: true },
price: { type: String, required: true },
category: {
      type: String,
      enum: ['Nails', 'Hair', 'Makeup', 'Care', 'Massage'], 
      required: true
  }
});



module.exports = mongoose.model("services", ServicesSchema);