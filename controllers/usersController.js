const express = require("express");
const router = express.Router();

const User = require("../models").User;

// INDEX
router.get("/", (req, res) => {
  res.render("users/index.ejs");
});

//POST - CREATE NEW USER FROM SIGNUP
router.post("/", (req, res) => {
  User.create(req.body).then((newUser) => {
    res.redirect(`/users/${newUser.id}`);
  });
});

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});
// GET LOGIN
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
//POST LOGIN
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ where: { username, password } });

  if (user !== null) {
    res.redirect(`/users/${user.id}`);
  } else {
    res.redirect("/users/login");
  }
});


  
  router.get("/:id", (req, res) => {
    User.findByPk(req.params.id, {
      include :[Teams]
      
    }).then((userProfile) => {
      res.render("users/profile.ejs", {
        user: userProfile,
      });
    });
  });

  // EDIT PROFILE
  
  router.put('/:index', (req, res) => {
    
    usersDB[req.params.id] = req.body
    res.redirect('/users/profile/' + req.params.id)
})

  // DELETE USER
  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id }});
    res.redirect("/users");
  });

  module.exports = router;
