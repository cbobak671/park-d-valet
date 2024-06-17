const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Car = require("../models/car.js");

router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id).populate(
      "cars"
    );
    console.log(currentUser.cars);
    res.render("cars/index.ejs", { cars: currentUser.cars });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/new", (req, res) => {
  res.render("cars/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const car = await Car.create(req.body);
    const currentUser = await User.findById(req.session.user._id);
    currentUser.cars.push(car._id);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/cars`);
  } catch (error) {
    console.log(error);
    res.redirect("/cars");
  }
});

router.get("/:carId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const currentCar = await Car.findById(req.params.carId);
    console.log(currentUser.carId);
    res.render("cars/show.ejs", { car: currentCar });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
