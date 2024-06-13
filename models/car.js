const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  customer: { user_id, require: true },
  phoneNumber: { String, require: true },
  carMake: {String, require: true},
  carModel: {String, require: true},
  carColor: {String, require: true},
  carType: String,
  carYear: String,
  licensePlate: String,
  parkingLocation: {String, require: true},
  damageStatus: {boolean, require: true},
  parkingStatus: {String, require: true},
  paidStatus: {boolean, require: true},
  valet: {user_id, require: true},
});
