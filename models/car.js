const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  customer: { type: String, required: true, },
  phoneNumber: { type: String, required: true, },
  carMake: { type: String, required: true, },
  carModel: { type: String, required: true, },
  carColor: { type: String, required: true, },
  carType: String,
  carYear: String,
  licensePlate: String,
  parkingLocation: { type: String, required: true, },
  damageStatus: { type: Boolean, required: true, },
  parkingStatus: { type: String, required: true, },
  paidStatus: { type: Boolean, required: true, },
  valet: { type: String, required: true, },
});


const Car = mongoose.model("Car", carSchema);

module.exports = Car;
