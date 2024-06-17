const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.get("/", async (req, res) => {
  try {
    res.render("cars/index.ejs");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/cars/new", (req, res) => {
    res.render("cars/new.ejs");
  }); 

router.post("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.cars.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/cars`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
