const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

// authRoutes exports a function
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function() {
  console.log("Server running at PORT:" + PORT + "/");
});
