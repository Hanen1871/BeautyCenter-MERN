const mongoose = require("mongoose");
const { applyDefaults } = require("./Product");


const schema = mongoose.Schema
 const CommandeSchema = new schema({
    id_user:String,
  name_user: { type: String, required: true },
  name_product: { type: String, required: true },
  date_commande :{ type: String, required: true },
  phone: { type: Number, required: true }, 
  category: {
    type: String,
}, 
 price: { type: String, required: true },
  status: { type: String, default: "non-confirmed" } ,
  images:Array

});

module.exports = mongoose.model("commande", CommandeSchema);