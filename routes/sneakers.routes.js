const express = require("express");
const router = express.Router();

// GET sneakers/collection route
router.get("/collection", async (req, res, next) => {
    try {
        res.render("products.hbs")
    } catch (err) {
        console.error(err);
    }
});


// GET sneakers Men
router.get("/men", async (req, res, next) => {
    try{
        res.render('products.hbs')
    } catch (err) {
        console.error(err);
    }
})


// GET sneakers Women
router.get("/women", async (req, res, next) => {
    try{
        res.render('products.hbs')
    } catch (err) {
        console.error(err);
    }
})



// GET sneakers kids
router.get("/kids", async (req, res, next) => {
    try{
        res.render('products.hbs')
    } catch (err) {
        console.error(err);
    }
})



module.exports = router