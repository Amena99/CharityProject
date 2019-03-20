// require("dotenv").config();
const express = require("express");

//require models folder with sql schemas
const db = require("./models");

// const mongoose = require("mongoose"); 
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

var syncOptions = { force: false };

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

db.sequelize.sync(syncOptions).then(function (){
  // Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});

module.exports = app;


