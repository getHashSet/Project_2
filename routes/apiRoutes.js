var db = require("../models");
const passport = require("passport");
// const passportJWT = require("passport-jwt");

module.exports = app => {
  // this is all the password routes
  // get all users
  app.get("/users", function(req, res) {
    db.nextStepResume_db.getAllUsers().then(user => res.json(user));
  });

  // register route
  app.post("/register", function(req, res) {
    const { userPin, userPassword } = req.body;
    db.nextStepResume_db
      .createUser({ userPin, userPassword })
      .then(user => res.json({ user, msg: "account created successfully" }));
  });

  //login route
  app.post("/login", async function(req, res) {
    const { userPin, userPassword } = req.body;
    if (userPin && userPassword) {
      let user = await getUser({ userPin: userPin });
      if (!user) {
        res.status(401).json({ message: "No such user found" });
      }
      if (user.userPassword === userPassword) {
        // from now on we"ll identify the user by the id and the id is the
        // only personalized value that goes into our token
        let payload = { id: user.id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: "ok", token: token });
      } else {
        res.status(401).json({ msg: "userPassword is incorrect" });
      }
    }
  });
  app.get(
    "/protected",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      res.json("Success! You can now see this without a token.");
    }
  );
};
