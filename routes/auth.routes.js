const express = require("express");
const router = express.Router();

// GET signin page
router.get("/signin", async (req, res) => {
  try {
    res.render("signin.hbs");
  } catch (err) {
    console.log(err);
  }
});


// GET logout route
router.get("/logout", (req, res) => {
  res.render("/");
});

module.exports = router;
