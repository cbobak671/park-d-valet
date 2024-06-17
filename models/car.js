const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  valetName: { type: String, required: true, },
  fullName: { type: String, required: true, },
  phoneNumber: { type: String, required: true, },
  carMake: String,
  carModel: String,
  carColor: String,
  carType: {type: String, enum:['sedan', 'coupe', 'suv', 'van', 'pickup', 'other']},
  carYear: String,
  licensePlate: String,
  parkingLocation: { type: String, required: true, },
  damageStatus: String,
  damageStatusNotes: String,
  parkingStatus: { type: String, enum:['staged', 'parked', 'returned'],equired: true, },
  paidStatus: String,
});


const Car = mongoose.model("Car", carSchema);

module.exports = Car;
