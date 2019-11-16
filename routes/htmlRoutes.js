var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbUserData) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbUserData
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/question", function(req, res) {
    res.render("questions");
  });

  app.get("/resume", function(req, res) {
    res.render("resume");
  });

  app.get("/resume1", function(req, res) {
    res.render("resume1");
  });

  app.get("/resume2", function(req, res) {
    res.render("resume2");
  });

  app.get("/resume3", function(req, res) {
    res.render("resume3");
  });
  app.get("/business", function(req, res) {
    res.render("businessCards");
  });

  app.get("/apiStuffs", function(req, res) {
    res.render("apiStuffs");
  });

  app.get("/end", function(req, res) {
    res.render("end");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
