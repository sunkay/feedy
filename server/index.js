const express = require("express");
require("./services/passport");

const app = express();

// authRoutes exports a function
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, function() {
  console.log("Server running at PORT:" + PORT + "/");
});
