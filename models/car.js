const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  valetName: { type: String, required: true, },
  fullName: { type: String, required: true, },
  phoneNumber: { type: String, required: true, },
  carMake: { type: String, required: true, },
  carModel: { type: String, required: true, },
  carColor: { type: String, required: true, },
  carType: {type: String, enum:['sedan', 'coupe', 'suv', 'van', 'pickup', 'other']},
  carYear: String,
  licensePlate: String,
  parkingLocation: { type: String, required: true, },
  damageStatus: { type: Boolean, required: true, },
  damageStatusNotes: String,
  parkingStatus: { type: String, enum:['staged', 'parked', 'returned'],equired: true, },
  paidStatus: { type: Boolean, required: true, },
});


const Car = mongoose.model("Car", carSchema);

module.exports = Car;
