var db = require("../models");

module.exports = function(app) {

  // Testing Only Remove before we publish
  app.post("/testing/123", function(req, res) {
    db.User_Data.create(req.body).then(function(returnThis){
      res.json(returnThis);
    })
  });

  app.get("/testing/:key", function(req, res) {
    db.User_Data.findAll({
      where: { key: req.params.key }
    }).then(function (dataz){
      res.json(dataz);
    });
  });

  app.put("/testing/123/:key", function(req, res) {

    console.log(req.body[0]);
    db.User_Data.update({quote: req.body.text}, {where: {key: req.params.key}})
    .then(function(dbResult){
      res.json(dbResult);
    });

  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbUserData) {
      res.json(dbUserData);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbUserData) {
      res.json(dbUserData);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbUserData) {
      res.json(dbUserData);
    });
  });
};
