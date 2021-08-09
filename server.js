const express = require("express");
const methodOverride = require("method-override");
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  let logStr = `${req.method} ${req.url}`;

  if (Object.keys(req.body).length !== 0) {
    logStr += ` -- DATA: ${JSON.stringify(req.body)}`;
  }

  console.log(logStr);
  next();
});

const pokemon = [
  {
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
  },
  {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
  },
  {
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg",
  },
  {
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg",
  },
  {
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg",
  },
  {
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg",
  },
  {
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg",
  },
];

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { pokemon });
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/new", (req, res) => res.render("new.ejs"));

app.get("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  res.render("show.ejs", { pokemon: pokemon[index], index });
});

app.put("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  pokemon[index] = req.body;
  res.redirect("/pokemon");
});

app.delete("/pokemon/:index", (req, res) => {
  const index = req.params.index;
  pokemon.splice(index, 1);
  res.redirect('/pokemon');
});

app.get("/pokemon/:index/edit", (req, res) => {
  const index = req.params.index;

  res.render("edit.ejs", {
    pokemon: pokemon[index],
    index,
  });
});

app.listen(3000, () => console.log("I'm listening!"));