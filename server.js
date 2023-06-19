const express = require("express")
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const dashboardRouter = require("./routes/dashboard");

require("dotenv").config({ path: "./config/.env"});
connectDB();

require("./config/passport")(passport);
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
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);
app.use(flash());
app.listen(process.env.PORT, () => {
    console.log("Test build online")
});

// route setup
app.use("/dashboard", dashboardRouter);