const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

const carsController = require("./controllers/cars.js");

const port = process.env.PORT ? process.env.PORT : "3000";

const authController = require("./controllers/auth.js");
const session = require("express-session");
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

const Car = require("./models/car.js");

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});

app.use("/auth", authController);
app.use("/users/cars", carsController);

app.get("/cars/new", (req, res) => {
  res.render("cars/new.ejs");
});

app.post("/cars", async (req, res) => {
  console.log(req.body);
  res.redirect("/cars/new");
});

app.listen(port, () => {
  console.log(`The Park'd App is ready on port ${port}!`);
});
