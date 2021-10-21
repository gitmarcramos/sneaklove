const express = require("express"); // import express in this module
const router = express.Router(); // create an app sub-module (router)
const sneakerSchema = require("./../models/Sneaker");

//GET dashboard view
router.get("/", (req, res) => {
  try {
    res.render("products-manage.hbs");
  } catch (err) {
    console.error(err);
  }
});

// GET add item
router.get("/products-add", (req, res) => {
  res.render("products-add.hbs");
});

// POST add item
router.post("/products-add", async (req, res, next) => {
  try {
    console.log(req.body);
    await sneakerSchema.create(req.body);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;