const express = require("express");
const router = express.Router();

// return console.log(`\n\n
// -----------------------------
// -----------------------------
//      wax on / wax off !
// -----------------------------
// -----------------------------\n\n`
// );


// GET route, index
router.get(["/", "/index"], async (req, res) => {
  try {
    res.render("index.hbs");
  } catch (err) {
    console.log(e, "Index GET error")
  }
});



// router.get("/sneakers/:cat", (req, res) => {
//   res.send("bar");
// });

// GET route, 
router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

// router.get("/signup", (req, res) => {
//   res.send("sneak");
// });

// router.get("/signin", (req, res) => {
//   res.send("love");
// });

module.exports = router;
