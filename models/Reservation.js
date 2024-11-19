const mongoose = require("mongoose");
const { applyDefaults } = require("./Services");


const schema = mongoose.Schema
 const ReservationSchema = new schema({
    id_user:String,
  name_user: { type: String, required: true },
  name_service: { type: String, required: true },
  date_reservation :{ type: String, required: true },
  phone: { type: Number, required: true }, 
  category: {
    type: String,
    enum: ['Nails', 'Hair', 'Makeup', 'Care', 'Massage'], 
    required: true
},
  price: { type: String, required: true },
  status: { type: String, default: "non-confirmed" } 

});

module.exports = mongoose.model("reservation", ReservationSchema);