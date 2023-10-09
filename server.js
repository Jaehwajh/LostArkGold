const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const pageRouter = require("./routes/page")
const dashboardRouter = require("./routes/dashboard");


// Dot env config
require('dotenv').config();

//App view 
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
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

// Database
const database = process.env.DB;

const connectDB = async() => {
    try{
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connected!`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

connectDB();

// app.use(flash());
app.listen(process.env.PORT, () => {
    console.log("Test build online")
});

// route setup
app.use("/", pageRouter);
app.use("/dashboard", dashboardRouter);