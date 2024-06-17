const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const carsController = require("./controllers/cars.js");
const authController = require("./controllers/auth.js");

const port = process.env.PORT ? process.env.PORT : "3000";

const MongoStore = require("connect-mongo");

const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView);

const Car = require("./models/car.js");

app.get("/", async (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/cars`);
  } else {
    res.render("index.ejs");
  }
});

app.use("/auth", authController);
app.use(isSignedIn);
app.use("/users/:userId/cars", carsController);

app.get("/cars/new", (req, res) => {
    console.log(res.locals.user);
    res.render("cars/new.ejs");
  });

app.listen(port, () => {
  console.log(`The Park'd App is ready on port ${port}!`);
});


// comment graveyard
// app.post("/cars", async (req, res) => {
//   console.log(req.body);
//   res.redirect("/cars/new");
// });

// app.post("/cars/new", async (req, res) => {
//     try {
//       const currentUser = await User.findById(req.session.user._id);
//       currentUser.cars.push(req.body);
//       await currentUser.save();
//       res.redirect(`/users/${currentUser._id}/cars`);
//     } catch (error) {
//       console.log(error);
//       res.redirect("/cars");
//     }
//   });