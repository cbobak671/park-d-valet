const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  valetName: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  carMake: String,
  carModel: String,
  carColor: String,
  carType: {
    type: String,
    enum: ["Sedan", "Coupe", "SUV", "Van", "Pickup", "Other"],
  },
  carYear: String,
  licensePlate: String,
  parkingLocation: { type: String, required: true },
  damageStatus: String,
  damageStatusNotes: String,
  parkingStatus: {
    type: String,
    enum: ["Staged", "Parked", "Returned"],
    equired: true,
  },
  paidStatus: String,
  assignee: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
