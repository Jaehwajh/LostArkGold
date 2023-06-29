const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const dashboardRouter = require("./routes/dashboard");
const { MongoClient } = require("mongodb");

require("dotenv").config({ path: "./config/.env"});

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "LightofSalvation",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ clientPromise: MongoClient.connection}),
    })  
);

app.use(flash());
app.listen(process.env.PORT, () => {
    console.log("Test build online")
});

// route setup
app.use("/dashboard", dashboardRouter);