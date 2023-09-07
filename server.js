const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const { MongoClient } = require("mongodb");
const dashboardRouter = require("./routes/dashboard");



// Database
// const client = new MongoClient(process.env.DB_STRING);

// const connectDB = async() => {
//     try{
//         await client.connect();
//         console.log(`MongoDB Connected!`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// };

// connectDB();

// Dot env config
require("dotenv").config({ path: "./config/.env"});

//App view 
app.set("view engine", "ejs");
app.use(express.static(__dirname + '../public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));

// app.use(
//     session({
//         secret: "LightofSalvation",
//         resave: false,
//         saveUninitialized: false,
//         store: new MongoStore({ clientPromise: MongoClient.connection}),
//     })  
// );

// app.use(flash());
app.listen(process.env.PORT, () => {
    console.log("Test build online")
});

// route setup
app.use("/", dashboardRouter);