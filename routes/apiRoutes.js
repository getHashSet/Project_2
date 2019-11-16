var db = require("../models");
const passport = require("passport");
<<<<<<< HEAD
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
 // Testing Only Remove before we publish
 app.post("/testing/123", function(req, res) {
   db.User_Data.create(req.body).then(function(returnThis) {
     res.json(returnThis);
   });
 });
 app.get("/testing/:key", function(req, res) {
   db.User_Data.findAll({
     where: { key: req.params.key }
   }).then(function(dataz) {
     res.json(dataz);
   });
 });
 app.put("/testing/123/:key", function(req, res) {
   console.log(req.body[0]);
   db.User_Data.update(
     { quote: req.body.text },
     { where: { key: req.params.key } }
   ).then(function(dbResult) {
     res.json(dbResult);
   });
 });
};
=======
const passportJWT = require("passport-jwt");
// const jwt = require("jsonwebtoken");
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";
module.exports = app => {
  // this is all the password routes
  // get all users
  app.get("/users", function(req, res) {
    console.log(db.User_Login);
    db.User_Logins.getAllUsers().then(user => res.json(user));
  });

  // protected route
  app.get(
    "/protected",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      res.json({
        msg: "Congrats! You are seeing this because you are authorized"
      });
    }
  );

  // register route
  app.post("/user_login", function(req, res) {
    const userPassword = req.body.password;
    const userName = req.body.user_email;
    console.log(userName, userPassword);
    db.User_Login.create({
      userName: userName,
      password: userPassword
    }).then(user => res.json({ user, msg: "account created successfully" }));
  });

  //login route
  app.post("/protected", async function(req, res) {
    const { userName, password } = req.body;
    if (password && userName) {
      let user = await getUser({ password: userPassword });
      if (!user) {
        res.status(401).json({ message: "No such user found" });
      }
      if (user.password === userPassword) {
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

  let strategy = new JwtStrategy(jwtOptions, function(User_Login, next) {
    console.log("payload received", User_Login);
    let user = getUser({ id: User_Login.id });
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
  // use the strategy
  passport.use(strategy);
  app.get(
    "/protected",
    passport.authenticate("jwt", { session: false }),
    function(req, res) {
      res.json("Success! You can now see this without a token.");
    }
  );
  // Testing Only Remove before we publish
  app.post("/testing/123", function(req, res) {
    db.User_Data.create(req.body).then(function(returnThis) {
      res.json(returnThis);
    });
  });

  app.get("/testing/:key", function(req, res) {
    db.User_Data.findAll({
      where: { key: req.params.key }
    }).then(function(dataz) {
      res.json(dataz);
    });
  });

  app.put("/testing/123/:key", function(req, res) {
    console.log(req.body[0]);
    db.User_Data.update(
      { quote: req.body.text },
      { where: { key: req.params.key } }
    ).then(function(dbResult) {
      res.json(dbResult);
    });
  });
};
>>>>>>> 2df92be3a42c9072d67e26083ee3f469a485c625
