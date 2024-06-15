const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  valet: { type: String, required: true, },
  customer: { type: String, required: true, },
  phoneNumber: { type: String, required: true, },
  carMake: { type: String, required: true, },
  carModel: { type: String, required: true, },
  carColor: { type: String, required: true, },
  carType: {type: String, enum:['Sedan', 'Coupe', 'Suv', 'Van', 'Pickup', 'Other']},
  carYear: String,
  licensePlate: String,
  parkingLocation: { type: String, required: true, },
  damageStatus: { type: Boolean, required: true, },
  damageStatusNotes: String,
  parkingStatus: { type: String, enum:['Staged', 'Parked', 'Returned'],equired: true, },
  paidStatus: { type: Boolean, required: true, },
});


const Car = mongoose.model("Car", carSchema);

module.exports = Car;
