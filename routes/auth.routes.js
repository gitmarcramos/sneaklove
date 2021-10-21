const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const bcrypt = require("bcrypt"); // lib to encrypt data

router.get("/signin", (req, res, next) => {
  res.render("signin.hbs");
});

router.get("/signup", (req, res, next) => {
  res.render("signup.hbs");
});

router.get("/logout", async (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/signin");
  });
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email: email });

  if (!foundUser) {
    //   Display an error message telling the user that either the password
    // or the email is wrong
    req.flash("error", "Invalid credentials");
    res.redirect("/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      // Display an error message telling the user that either the password
      // or the email is wrong
      req.flash("error", "Invalid credentials");
      res.redirect("/signin");
    } else {
      // everything is fine so :
      // Authenticate the user...
      const userObject = foundUser.toObject(); // needed to convert mongoose object to classic js object
      delete userObject.password; // remove password before saving user in session

      req.session.currentUser = userObject; 
      // above: Store the user in the session (data server side + a cookie is sent client side)


      req.flash("success", "Successfully logged in...");
      res.redirect("/dashboard");
    }
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const newUser = { ...req.body }; // clone req.body with spread operator
    const foundUser = await User.findOne({ email: newUser.email });

    if (foundUser) {
      req.flash("warning", "Email already registered");
      res.redirect("/signup");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      newUser.password = hashedPassword;
      await User.create(newUser);
      req.flash("success", "Congrats ! You are now registered !");
      res.redirect("/signin");
    }
  } catch (err) {
    let errorMessage = "";
    for (field in err.errors) {
      errorMessage += err.errors[field].message + "\n";
    }
    req.flash("error", errorMessage);
    res.redirect("/signup");
  }
});

module.exports = router;
