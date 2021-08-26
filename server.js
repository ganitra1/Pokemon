const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/pokemon", require('./controllers/pokemonController'));
app.use("/users", require('./controllers/usersController'));
app.listen(5000, () => console.log("I'm listening!"));