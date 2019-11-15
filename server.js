require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
let bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// password authentication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
let ExtractJwt = passportJWT.ExtractJwt;
// let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/

db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
