const express = require("express"); // import express in this module
const router = express.Router(); // create an app sub-module (router)
const sneakerSchema = require("./../models/Sneaker");
const protectPrivateRoute = require("../middlewares/protectPrivateRoute");

// SET the DASHBOARD router to use AUTH middleware
// router.use(protectPrivateRoute);

//GET dashboard view
router.get("/", async (req, res) => {
  try {
    const sneakers = await sneakerSchema.find();
    res.render("products-manage.hbs", { sneakers });
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

// GET sneaker ID and delete item
router.get("/delete/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await sneakerSchema.findByIdAndDelete(req.params.id);
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
});

// GET sneakers ID and update
router.get("/product-edit/:id", async (req, res) => {
  try {
    const sneaker = await sneakerSchema.findById(req.params.id);
    res.render("product-edit.hbs", { sneaker });
  } catch (err) {
    console.log(err, "Canno't GET Product Edit route");
  }
});

// POST sneakers ID and update
router.post("/product-edit/:id", async (req, res) => {
  try {
    const sneaker = await sneakerSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    console.log("==========>", req.body)
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err, "Canno't POST Product Edit route");
  }
});

module.exports = router;

